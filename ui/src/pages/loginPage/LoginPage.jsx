import Container from "./LoginPageCSS";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginImage from "../../assets/login.jpg";
import LoginIcon from "../../assets/logo2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PasswordInput } from "../../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useAuthenticateUserMutation } from "../../features/auth/userApi";
import { FaSpinner } from "react-icons/fa";
import { setAuthenticatedUser } from "../../features/userProfile/userProfileApi";
import { clearCart, setCartUser } from "../../features/cart/CartSlice";

const LoginPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
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
  });
  const [authenticateUser, { isLoading }] = useAuthenticateUserMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForgotPass = () => {
    navigate("/authenticate/forgotPassword");
  };
  const loginUser = async (formData) => {
    try {
      const response = await authenticateUser({
        email: formData.email,
        password: formData.password,
      });
      if (response && response.error) {
        toast.error(response.error.data.message);
        reset();
      } else if (response && response.data) {
        if (response && response.data.success === true) {
          const user = response.data.data.user;
          const accessToken = response.data.data.accessToken;
  
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          localStorage.setItem("token", JSON.stringify(accessToken));
  
          dispatch(setAuthenticatedUser(user));
          
          dispatch(clearCart());
          dispatch(setCartUser(user._id));
          if (response.data.data.user.role === "admin") {
            setTimeout(() => {
              navigate("/admin/dashboard");
            }, 2000);
          } else if(response.data.data.user.role === "staff") {
            setTimeout(() => {
              navigate("/staff/orders");
            }, 2000);
          }else{
            setTimeout(() => {
              navigate("/shop/products");
            }, 2000);
          }
        } else {
          toast.error(response.data.message);
          reset();
        }
      } else {
        toast.error(response.data.message);
        reset();
      }
    } catch (error) {
      console.log(error);
      reset();
      return toast.error("An error occurred logging in");
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
      <div className="login--main--container">
        <div className="container--login">
          <div className="wrap--login">
            <div className="login--form-content">
              <form
                className="login--form"
                data-cy="login--form"
                onSubmit={handleSubmit(loginUser)}
              >
                <div className="login--icon" data-cy="login--icon">
                  <img src={LoginIcon} alt="loginIcon" />
                </div>
                <h4 className="login--form--title">
                  <span>Type your Email Address and Password to log in</span>
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
                <div className="group-wrap-input">
                  <PasswordInput
                    register={{ ...register("password") }}
                    passwordLabel="password"
                    placeholder="password*"
                  />

                  <p data-cy="password-errors" className="errors">
                    {errors.password?.message}
                  </p>
                </div>
                <div>
                  <div className="login-form-forgot">
                    <span data-cy="login-form-forgot">
                      <button
                      className="forgot__pass__btn"
                      type="button"
                      onClick={handleForgotPass} 
                      >
                      Forgot Password?
                      </button>
                      </span>
                  </div>
                </div>

                <div
                  className="container--login--form--btn"
                  data-cy="container--login--form--btn"
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn--primary auth--btn ${
                      isLoading ? "disabled" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered && isLoading ? <FaSpinner /> : "Login"}
                  </button>
                </div>
                <div className="new--account-home">
                  <button className="back--home" onClick={() => navigate("/")}>
                    <FaLongArrowAltLeft />
                    <span>Back to home</span>
                  </button>

                  <div className="new--account">
                    <p>Don't have an account?</p>
                    <a href="">
                      <span
                        onClick={() => navigate("/authenticate/register")}
                        className="login--span"
                      >
                        Register
                      </span>
                    </a>
                  </div>
                </div>
              </form>
              <div className="login-copyright">
                <p>By continuing you agree to seedling propagation’s</p>
                <div className="terms">
                  <a href="">Terms and Conditions</a>
                </div>
              </div>
            </div>
            <div className="login--image">
              <img src={LoginImage} alt="login" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
