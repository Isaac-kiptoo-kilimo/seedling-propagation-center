import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginImage from "../../assets/login.jpg";
import LoginIcon from "../../assets/logo2.png";
import Container from "./ForgotPasswordCSS";
import { useForgotPasswordMutation } from "../../features/auth/userApi";
import { ToastContainer, toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
const ForgotPassword = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  
  const navigate = useNavigate();
  const [forgotPassword,{isLoading}] = useForgotPasswordMutation();
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const forgotPass = async (formData) => {
    try {
      const response = await forgotPassword({
        email: formData.email,
      });
      if (response && response.error) {
        toast.error(response.error.data.message);
        reset();
      } else if (response && response.data) {
        if (response && response.data.success === true) {
          toast.success(response.data.message);
          reset();
        } else {
          toast.error(response.data.message);
          reset();
        }
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
      <div className="forgot--pass--main--container">
        <div className="container--forgot--pass">
          <div className="wrap--forgot--pass">
            <div className="forgot--pass--form-content">
              <form
                data-cy="forgot--pass--form"
                className="forgot--pass--form"
                onSubmit={handleSubmit(forgotPass)}
              >
                <div className="forgot--pass--icon">
                  <img src={LoginIcon} alt="forgotlogo" />
                </div>

                <h4 className="forgot--pass--form--title">
                  <p>Forgot your password?</p>
                 
                </h4>

                <div className="group-wrap-input">
                  <div
                    className={`email--wrap--input ${
                      isEmailFocused ? "focused" : ""
                    }`}
                  >
                    <input
                      className="email-input"
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={(e) => setIsEmailFocused(e.target.value !== "")}
                      type="email"
                      {...register("email")}
                    />
                    <label
                      className={`email--label--input ${
                        isEmailFocused ? "focused" : ""
                      }`}
                    >
                      Email Address*
                    </label>
                  </div>
                  <p data-cy="errors" className="errors">
                    {errors.email?.message}
                  </p>
                </div>

                <div className="forgot--pass--form--btn">
                  <button
                    data-cy="forgot--pass--form--btn"
                    type="submit"
                    disabled={ isLoading}
                    className={`btn--primary auth--btn ${
                      isLoading ? "disabled" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered && ( isLoading) ? <FaSpinner /> : "Reset Password"}
                  </button>
                </div>
                <div className="login--form--link">
                  <p> Already have an account? </p>
                  <span onClick={handleLoginNavigation} data-cy="login--here">Login Here.</span>
                </div>
              </form>
            </div>
            <div className="forgot--pass--image">
              <img src={LoginImage} alt="forgotPass" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
