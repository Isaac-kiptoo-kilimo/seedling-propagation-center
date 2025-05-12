import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";
import Container from "./EditProfileCSS";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useUpdateUserProfileMutation, useUpdateStaffProfileMutation } from "../../features/auth/userApi";

const EditProfile = ({ setIsEditProfileModalOpen, userData, id }) => {
  const dispatch = useDispatch();

  const profile = userData.staff || userData.user;
  const role = userData.staff ? "staff" : "customer";
  const { fullName, phoneNumber } = profile;

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName,
      phoneNumber,
    },
  });

  
  const [updateUserProfile, { isLoading: isUserLoading }] =
    useUpdateUserProfileMutation();
  const [updateStaffProfile, { isLoading: isStaffLoading }] =
    useUpdateStaffProfileMutation();

  const handleEditProfile = async (formData) => {
    try {

      let response;
      if (role === "staff") {
        response = await updateStaffProfile({
          _id:id,
          updatedStaff: formData,
        });
      } else {
        response = await updateUserProfile({ _id:id, updatedUser: formData });
      }

      if (response.error) {
        toast.error(response.error.data.message);
        reset();
      } else if (response.data) {
        if (response.data.success) {
          // Optional: Update localStorage, redux here if needed
          toast.success(response.data.message);
          setTimeout(() => {
            setIsEditProfileModalOpen(false);
          }, 2000);
          // reset();
        } else {
          toast.error(response.data.message);
          reset();
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating profile");
    }
  };

  const handleCloseModal = () => {
    setIsEditProfileModalOpen(false);
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
        <div className="edit__profile--modal">
          <div className="edit__profile--modal--content">
            <div className="top__items__profile">
              <h2 className="profile__modal--heading"> Edit Profile</h2>
              <div className="edit__profile--close">
                <IoCloseCircle onClick={handleCloseModal} />
              </div>
            </div>

            <form
              className="edit__profile--form"
              onSubmit={handleSubmit(handleEditProfile)}
            >

              <div className="edit__profile__group__input">
                <label className="first__name__label">Full Name</label>
                <input
                  type="text"
                  className="first__name__input"
                  placeholder="e.g Jane"
                  {...register("fullName")}
                />
                <p className="errors">{errors.fullName?.message}</p>
              </div>
              <div className="edit__profile__group__input">
                <label className="first__name__label">Phone Number</label>
                <input
                  type="tel"
                  className="last__name__input"
                  placeholder="e.g Doe"
                  {...register("phoneNumber")}
                />
                <p className="errors">{errors.phoneNumber?.message}</p>
              </div>

              <div className="edit__profile__btn">
                <button
                  type="submit"
                  className="edit__profile--btn btn--primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditProfile;
