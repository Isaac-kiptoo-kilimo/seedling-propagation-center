import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginImage from "../../assets/login.jpg";
import LoginIcon from "../../assets/logo2.png";
import Container from "./ResetPasswordCSS";
import { useResetPasswordMutation } from "../../features/auth/userApi";
import { ToastContainer, toast } from "react-toastify";
import { PasswordInput } from "../../components";
import { FaSpinner } from "react-icons/fa";

const ResetPassword = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const { resetPasswordCode } = useParams();
  const [resetPassword,{isLoading}] = useResetPasswordMutation();
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
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
      .required("Password is required")
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
    handleSubmit,
    reset,
    formState: { errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handlePasswordReset = async (formData) => {
    try {
      if (formData.password === formData.confirmPassword) {
        const response = await resetPassword({
          code: resetPasswordCode,
          password: formData.password,
        });
        if (response && response.error) {
          toast.error(response.error.data.message);
          reset();
        } else if (response && response.data) {
          if (response && response.data.success === true) {
            toast.success(response.data.message);
            reset();
            setTimeout(() => {
              navigate("/login");
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
      toast.error("An error occurred. Try Again!");
      reset();
    }
  };

  const handleLoginNavigation = () => {
    navigate("/authenticate/login");
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
      <div className="reset--main--container">
        <div className="container--reset">
          <div className="wrap--reset">
            <div className="reset--form-content">
              <form
                data-cy="reset--form"
                className="reset--form"
                onSubmit={handleSubmit(handlePasswordReset)}
              >
                <div className="reset--icon">
                  <img src={LoginIcon} alt="resetLogo" />
                </div>
                <h4 className="reset--form--title">
                  <p>Reset Your Password</p>
                  <span>
                    Time for a fresh start! Go ahead and set a new password.
                  </span>
                </h4>
                <div className="group-wrap-input">
                  <PasswordInput
                    passwordLabel="password*"
                    register={{ ...register("password") }}
                  />

                  <p data-cy="password-errors" className="errors">
                    {errors.password?.message}
                  </p>
                </div>
                <div className="group-wrap-input">
                  <PasswordInput
                    passwordLabel="Confirm Password*"
                    register={{ ...register("confirmPassword") }}
                  />
                  <p data-cy="password-errors" className="errors">
                    {errors.confirmPassword?.message}
                  </p>
                </div>

                <div className="container--reset--form--btn">
               
                  <button
                    data-cy="reset--btn"
                    type="submit"
                    disabled={isLoading}
                    className={`btn--primary auth--btn ${
                      isLoading ? "disabled" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered && (isLoading )? <FaSpinner />  : "Submit"}
                  </button>
                </div>
                <div className="">
                  <div className="reset-form-forgot">
                    <p>You want to navigate to Login?</p>
                    <span onClick={handleLoginNavigation} data-cy="login--here">Login Here.</span>
                  </div>
                </div>
              </form>
            </div>
            <div className="reset--image">
              <img src={LoginImage} alt="reset" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ResetPassword;
