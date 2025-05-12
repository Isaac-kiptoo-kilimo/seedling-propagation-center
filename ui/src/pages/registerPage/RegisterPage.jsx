import Container from "./RegisterPageCSS";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import LoginIcon from "../../assets/logo2.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PasswordInput } from "../../components";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../features/auth/userApi";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState("");
  const [focusedFullNameInput, setFocusedFullNameInput] = useState("");
  const [focusedEmailInput, setFocusedEmailInput] = useState("");

  const [createUser, { isLoading }] = useCreateUserMutation();

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    phoneNumber: yup
      .string()
      .max(13, "Invalid phone number format")
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
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
      .oneOf([yup.ref("password")], "Passwords do not match")
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
    handleSubmit,
    // control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateUser = async (formData) => {
    try {
      const response = await createUser({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      });
      console.log("response", response);
      if (response && response.error) {
        toast.error(response.error.data.message);
        reset();
      } else if (response && response.data) {
        if (response && response.data.success === true) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/authenticate/login");
          }, 2000);
          reset();
        } else {
          toast.error(response.data.message);
          reset();
        }
      }
    } catch (error) {
      console.log(error);
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
      <div className="register--main--container">
        <div className="container--register">
          <div className="wrap--register">
            <div className="register--form-content">
              <form
                className="register--form"
                onSubmit={handleSubmit(handleCreateUser)}
              >
                <div className="register--icon">
                  <img src={LoginIcon} alt="loginIcon" />
                </div>
                <h4 className="register--form--title">
                  <span>Welcome to Seedling Propagation Create an Account</span>
                </h4>
                <div className="group-wrap-input">
                  <div
                    className={`input-wrap ${
                      focusedFullNameInput ? "focused" : ""
                    }`}
                  >
                    <input
                      className="input-field"
                      onFocus={() => setFocusedFullNameInput(true)}
                      onBlur={() => setFocusedFullNameInput("")}
                      {...register("fullName")}
                    />
                    <label
                      className={`input-label ${
                        focusedFullNameInput ? "focused" : ""
                      }`}
                    >
                      Full Name*
                    </label>
                  </div>
                  <p className="errors">{errors.fullName?.message}</p>
                </div>
                <div className="group-wrap-input">
                  <div
                    className={`input-wrap ${focusedInput ? "focused" : ""}`}
                  >
                    <input
                      className="input-field"
                      onFocus={() => setFocusedInput(true)}
                      onBlur={() => setFocusedInput("")}
                      {...register("phoneNumber")}
                    />
                    <label
                      className={`input-label ${focusedInput ? "focused" : ""}`}
                    >
                      Phone Number*
                    </label>
                  </div>
                  <p data-cy="errors" className="errors">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
                <div className="group-wrap-input">
                  <div
                    className={`input-wrap ${
                      focusedEmailInput ? "focused" : ""
                    }`}
                  >
                    <input
                      className="input-field"
                      onFocus={() => setFocusedEmailInput(true)}
                      onBlur={() => setFocusedEmailInput("")}
                      {...register("email")}
                    />
                    <label
                      className={`input-label ${
                        focusedEmailInput ? "focused" : ""
                      }`}
                    >
                      Email Address*
                    </label>
                  </div>
                  <p className="errors">{errors.email?.message}</p>
                </div>
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

                <div>
                  <div className="login-link ">
                    <p>Already have an account?</p>
                    <a href="">
                      <span
                        onClick={() => navigate("/authenticate/login")}
                        className="login--span"
                      >
                        Login
                      </span>
                    </a>
                  </div>
                </div>

                <div className="container--register--form--btn">
                  <button type="submit" className={`btn--primary auth--btn`}>
                    Submit
                  </button>
                </div>
                <div className="back--home">
                  <button className="back--home--icon">
                    <FaLongArrowAltLeft />
                    <span>Back to home</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
