import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useChangePasswordMutation } from "../../features/auth/userApi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import Container from "./ChangePasswordModalCSS";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LuEye } from "react-icons/lu";
import { FiEyeOff } from "react-icons/fi";
import { toggleChangePasswordInputOne, toggleChangePasswordInputThree, toggleChangePasswordInputTwo, toggleChangePasswordModal } from "../../features/configurations/configurationSlice";

function ChangePasswordModal() {
  const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const { changePasswordInputOne,changePasswordInputTwo,changePasswordInputThree} =useSelector(store => store.configurations)
  
  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .required("Old Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        `- Must Contain at least\n:
          - 6 Characters
          - 1 Uppercase Letter
          - 1 Lowercase Letter
          - 1 Number
          - 1 Special Character`
      ),
    newPassword: yup
      .string()
      .required("New Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        `- Must Contain at least\n:
          - 6 Characters
          - 1 Uppercase Letter
          - 1 Lowercase Letter
          - 1 Number
          - 1 Special Character`
      ),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        `- Must Contain at least\n:
          - 6 Characters
          - 1 Uppercase Letter
          - 1 Lowercase Letter
          - 1 Number
          - 1 Special Character`
      ),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const changedPassword = async (formData) => {
    try {
      if (formData.newPassword === formData.confirmPassword) {
        const response = await changePassword({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        });
      if(response && response.error){
        toast.error(response.error.data.message)
      }else{
        if (response && response.data.success === true) {
          toast.success(response.data.message);
          reset();
          setTimeout(() => {
            dispatch(toggleChangePasswordModal());
          }, 2000);
        } else {
          toast.error(response.data.message);
          reset();
        }
      }
      } else {
        toast.error("Password do not match");
        reset();
      }
    } catch (error) {
      toast.error("error changing password");
      reset();
    }
  };
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="modal-overlay">
        <div className="change__password--modal" data-cy="change__password--modal">
          <div className="change--password--login">
            <div className="change--passowrd--form-content">
              <div className="top__items__change__password">
              <div className="change__password--close">
                  <IoCloseCircle  onClick={()=>dispatch(toggleChangePasswordModal())}/>
                </div>
                <h4 className="change__pass__modal--heading">
                  change password
                </h4>
                
              </div>
              <form
                data-cy="change--pass--form"
                className="change--pass--form"
                onSubmit={handleSubmit(changedPassword)}
              >
                <div className="group-wrap-input">
                  <div className="wrap--input">
                  <label>Current Password</label>
                    <input
                      data-cy="input"
                      type={changePasswordInputOne ? "password" : "text"}
                      placeholder="Old password"
                      className="input"
                      {...register("currentPassword")}
                    />
                    <i className="icon" onClick={()=>dispatch(toggleChangePasswordInputOne())}>
                      {changePasswordInputOne ? <FiEyeOff /> : <LuEye />}
                    </i>
                  </div>
                  <p className="errors">{errors.currentPassword?.message}</p>
                </div>

                <div className="group-wrap-input">
                  <div className="wrap--input">
                  <label>New Password</label>
                    <input
                      data-cy="password--input"
                      type={changePasswordInputTwo ? "password" : "text"}
                      placeholder="New password"
                      className="input"
                      {...register("newPassword")}
                    />
                    <i className="icon" onClick={()=>dispatch(toggleChangePasswordInputTwo())}>
                      {changePasswordInputTwo ? <FiEyeOff /> : <LuEye />}
                    </i>
                  </div>
                  <p className="errors">{errors.newPassword?.message}</p>
                </div>

                <div className="group-wrap-input">
                  <div className="wrap--input">
                  <label>Confirm Password</label>
                    <input
                      type={changePasswordInputThree ? "password" : "text"}
                      placeholder="Confirm password"
                      className="input"
                      data-cy="confirm--password"
                      {...register("confirmPassword")}
                    />
                    <i className="icon" onClick={()=>dispatch(toggleChangePasswordInputThree())}>
                      {changePasswordInputThree ? <FiEyeOff /> : <LuEye />}
                    </i>
                  </div>

                  <p className="errors">{errors.confirmPassword?.message}</p>
                </div>

                <div className="container--change--pass--form--btn">
                  <button
                    data-cy="change--password--btn"
                    disabled={isLoading}
                    type="submit"
                    className={`btn--primary auth--btn ${
                      isLoading ? "disabled" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered && (isLoading) ? (
                      <FaSpinner />
                    ) : (
                      "Change password"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ChangePasswordModal;
