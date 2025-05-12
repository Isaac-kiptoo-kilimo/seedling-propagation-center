import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import Container from "./EditUserPageCSS";
import {
  useGetUserDetailsQuery,
  useUpdateUserProfileMutation,
} from "../../features/auth/userApi";

const EditUserPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

  const schema = yup.object().shape({
    fullName: yup.string().required("FullName is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup
      .string()
      .max(10, "Invalid phone number format")
      .required("Phone number is required"),
  });

  const { data: userData } = useGetUserDetailsQuery(id);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (userData && userData.user) {
      setValue("fullName", userData.user.fullName);
      setValue("email", userData.user.email);
      setValue("phoneNumber", userData.user.phoneNumber);
    }
  }, [userData, setValue]);

  const handleEditUser = async (formData) => {
    try {
      const response = await updateUserProfile({
        _id: id,
        updatedUser: { ...formData }
      });
      if (response && response.error) {
        toast.error(response.error.data.message);
        reset();
      } else if (response && response.data) {
        if (response && response.data.success === true) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/admin/dashboard");
          }, 2000);
          reset();
        } else {
          toast.error(response.data.message);
          reset();
        }
      }
    } catch (error) {
      console.log(error);

      toast.error("An error occured while editing staff");
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
      <div className="edit__user__container">
        <div className="edit__user__content">
          <div className="edit__user__heading">
            <span>Edit User</span>
          </div>
          <form
            className="edit__user__form"
            onSubmit={handleSubmit(handleEditUser)}
          >
            <div className="edit__user_name">
              <div className="edit__user__group__input">
                <label className="full__name__label">Full Name</label>
                <input
                  type="text"
                  className="full__name__input"
                  placeholder="e.g Jane"
                  {...register("fullName")}
                />
                <p className="errors">{errors.fullName?.message}</p>
              </div>
              <div className="edit__user__group__input">
                <label className="edit__user_email__label">Email Address</label>
                <input
                  type="email"
                  className="edit__user_email__input"
                  placeholder="eg. jane.doe@gmail.com"
                  {...register("email")}
                />
                <p className="errors">{errors.email?.message}</p>
              </div>
            </div>

            <div className="edit__user__group__input">
              <label className="edit__user_no__label">Phone Number</label>
              <input
                className="edit__user_no__input"
                placeholder="0722000000"
                {...register("phoneNumber")}
              />
              <p className="errors">{errors.phoneNumber?.message}</p>
            </div>

            <div className="edit__user__btn">
              <button
                type="submit"
                disabled={isLoading}
                className={`edit__user--btn btn--primary ${
                  isLoading ? "disabled" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered && isLoading ? <FaSpinner /> : "Edit User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default EditUserPage;
