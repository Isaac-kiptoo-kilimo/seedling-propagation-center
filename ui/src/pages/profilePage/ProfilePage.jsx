import Container from "./ProfilePageCSS";
import { getUserInitials } from "../../utils";
import { useState } from "react";
import { createPortal } from "react-dom";
import { EditProfile, LoadingSpinner } from "../../components";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  useGetStaffDetailsQuery,
  useGetUserDetailsQuery,
} from "../../features/auth/userApi";

const ProfilePage = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);

  const { _id, role } = user || {};

  const { data: staffData, isLoading: isStaffLoading } =
    useGetStaffDetailsQuery(_id, { skip: role !== "staff" });

  const { data: customerData, isLoading: isCustomerLoading } =
    useGetUserDetailsQuery(_id, { skip: role !== "customer" });

  const data = role === "staff" ? staffData : customerData;
  const isLoading = role === "staff" ? isStaffLoading : isCustomerLoading;

  if (!data) {
    return null;
  }

  console.log("data for user >>>", data);

  const { fullName, email, phoneNumber, streetAddress, county } =
    role === "staff" ? data.staff : data.user;

  return (
    <Container>
      <div className="profile__banner"></div>

      <div className="img-container">
        <span className="profile__placeholder">
          {getUserInitials(fullName)}
        </span>
        <button className="img--edit">
          <MdEdit />
        </button>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="profile__info">
          <h4 className="profile__headline">Hi {fullName}, Welcome Back!</h4>

          <div className="personal__information">
            <h5>Personal Information</h5>
            <div className="profile__details">
              <div>
                <label className="first__name__label">Full Name</label>
                <input
                  type="text"
                  className="full__name__input"
                  value={fullName}
                  disabled
                />
              </div>

              <div>
                <label className="email__label">email</label>
                <input
                  type="email"
                  className="profile__detail_email__input"
                  value={email}
                  disabled
                />
              </div>
            </div>
            <div className="profile__details">
              <div>
                <label className="role__label">Role</label>
                <input
                  type="text"
                  className="profile__detail_role__input"
                  value={role}
                  disabled
                />
              </div>
              <div>
                <label className="phone__no__label">Phone Number</label>
                <input
                  className="profile__detail_no__input"
                  value={phoneNumber}

                  disabled
                />
              </div>
         
            </div>
            <div className="btn-container">
                <button
                  onClick={() => setIsEditProfileModalOpen(true)}
                  className="btn--primary profile__edit"
                >
                  edit profile
                </button>
              </div>
          </div>
       <div className="delivery__infornation">
        <h5>Delivery Information</h5>
       <div className="profile__details">
            <div>
              <label>Street Address</label>
              <input
                type="text"
                className="profile__detail_role__input"
                value={streetAddress}
                disabled
              />
            </div>

            <div>
              <label>County</label>
              <input className="profile__detail_no__input" value={county} disabled />
            </div>
          </div>
       </div>
        </div>
      )}

      {isEditProfileModalOpen &&
        createPortal(
          <div className="edit__profile____modal">
            <EditProfile
              setIsEditProfileModalOpen={setIsEditProfileModalOpen}
              userData={data}
              id={_id}
            />
          </div>,
          document.body
        )}
    </Container>
  );
};

export default ProfilePage;
