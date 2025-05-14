import { useEffect, useRef, useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import Container from "./EditStaffPageCSS";
import { useGetStaffDetailsQuery, useUpdateStaffProfileMutation } from "../../features/auth/userApi";

const EditStaffPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [updateStaffProfile, { isLoading }] = useUpdateStaffProfileMutation();

  const schema = yup.object().shape({
    fullName: yup.string().required("FullName is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup.string().max(10,"Invalid phone number format").required("Phone number is required"),
  });

const {data:staffData}=useGetStaffDetailsQuery(id)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(()=>{
    if(staffData && staffData.staff){
    setValue("fullName", staffData.staff.fullName);
    setValue("email", staffData.staff.email);
    setValue("phoneNumber", staffData.staff.phoneNumber);
    }
  },[staffData,setValue])

  const handleEditStaff = async (formData) => {
 try {
  const response=await updateStaffProfile({ _id:id, 
    updatedStaff: {...formData},
   });
   if (response && response.error) {
    toast.error(response.error.data.message);
    reset();
  } else if (response && response.data) {
    if (response && response.data.success === true) {
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/admin/staff");
      }, 2000);
      reset();
    } else {
      toast.error(response.data.message);
      reset();
    }
  }
 } catch (error) {
  console.log(error);
  
  toast.error("An error occured while editing staff")
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
      <div className="create__user__container">
        <div className="create__user__content">
          <div className="create__user__heading">
            <span>Edit Staff</span>
          </div>
          <form
            className="create__user__form"
            onSubmit={handleSubmit(handleEditStaff)}
          >
            <div className="create__user_name">
              <div className="create__user__group__input">
                <label className="full__name__label">Full Name</label>
                <input
                  type="text"
                  className="full__name__input"
                  placeholder="e.g Jane"
                  {...register("fullName")}
                />
                <p className="errors">{errors.fullName?.message}</p>
              </div>
              <div className="create__user__group__input">
                <label className="create__user_email__label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="create__user_email__input"
                  placeholder="eg. jane.doe@gmail.com"
                  {...register("email")}
                />
                <p className="errors">{errors.email?.message}</p>
              </div>
            </div>

            <div
              className="create__user__group__input"
            >
              <label className="create__user_no__label">Phone Number</label>
              <input
              className="create__user_no__input"
              placeholder="0722000000"
                  {...register("phoneNumber")}
                  />
              <p className="errors">{errors.phoneNumber?.message}</p>
            </div>
            
            <div className="create__user__btn">
              <button
                type="submit"
                disabled={isLoading}
                className={`create__user--btn btn--primary ${
                  isLoading ? "disabled" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered && isLoading ? <FaSpinner /> : "Edit Staff"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default EditStaffPage;
