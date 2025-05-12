import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../deleteModal/DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setSelectedUser } from "../../features/configurations/configurationSlice";
import { useDeactivateStaffMutation, useRemoveStaffMutation, useRestoreStaffMutation } from "../../features/auth/userApi";
import Container from "./StaffDetailsCSS";
import { getUserInitials } from "../../utils";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const StaffDetails = ({ _id, fullName, email, isActive, role, phoneNumber, isAdmin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");

  const [removeStaff] = useRemoveStaffMutation();
  const [deactivateStaff] = useDeactivateStaffMutation();
  const [restoreStaff] = useRestoreStaffMutation();

  const handleEditStaff = () => {
    dispatch(
      setSelectedUser({
        _id,
        fullName,
        email,
        role,
        isAdmin,
      })
    );
    navigate(`/edit-staff/${_id}`);
  };

  const handleDeactivateStaff = async () => {
    try {
      const response = await deactivateStaff(_id);
      if (response?.error) {
        toast.error(response.error.data.message);
      } else {
        if (response?.data.success) {
          toast.success(response.data.message);
          setIsModalOpen(false);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error("An error occurred while deactivating");
    }
  };

  const handleRestoreStaff = async () => {
    try {
      const response = await restoreStaff(_id);
      if (response?.error) {
        toast.error(response.error.data.message);
      } else {
        if (response?.data.success) {
          toast.success(response.data.message);
          setIsModalOpen(false);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error("An error occurred while restoring");
    }
  };

  const handleDeleteStaff = async () => {
    try {
      const response = await removeStaff(_id);
      if (response?.error) {
        toast.error(response.error.data.message);
      } else {
        if (response?.data.success) {
          toast.success(response.data.message);
          setIsModalOpen(false);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error("An error occurred while deleting");
    }
  };

  return (
    <Container className="staff__row">
      <Link to={`/edit-staff/${_id}`} className="single-staff__profile">
        <span className="profile__placeholder">{getUserInitials(fullName)}</span>
        <p className="single-staff__name">{fullName}</p>
      </Link>
      <div className="single-staff__role">{role}</div>
      <div className="single-staff__role">{email}</div>
      <div className="single-staff__phone__no">
        <span key={_id} className="phone_no">
          {phoneNumber}
        </span>
      </div>

      {isAdmin && (
        <div className="single-staff__actions">
          <button onClick={handleEditStaff} className="single-staff__edit">
            <MdEdit />
          </button>

          {isActive ? (
            <button
              onClick={() => {
                setModalAction("deactivate");
                setIsModalOpen(true);
              }}
              className="single-staff__delete"
              data-tooltip-id="deactivate" data-tooltip-content="Deactivate Staff"
            >
              <RiUserUnfollowLine />
              <Tooltip id="deactivate"/>
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setModalAction("restore");
                  setIsModalOpen(true);
                }}
                className="single-staff__edit"
                data-tooltip-id="restore" data-tooltip-content="Restore Staff"
              >
                <RiUserFollowLine />
                <Tooltip id="restore"/>
              </button>
              <button
                onClick={() => {
                  setModalAction("delete");
                  setIsModalOpen(true);
                }}
                className="single-staff__delete"
                data-tooltip-id="delete" data-tooltip-content="Delete Staff"
              >
                <FaRegTrashAlt />
                <Tooltip id="delete"/>
              </button>
            </>
          )}
        </div>
      )}

      {isModalOpen && (
        <DeleteModal
          handleDelete={
            modalAction === "deactivate"
              ? handleDeactivateStaff
              : modalAction === "restore"
              ? handleRestoreStaff
              : handleDeleteStaff
          }
          action={modalAction}
          setIsModalOpen={setIsModalOpen}
          item="staff"
        />
      )}
    </Container>
  );
};

export default StaffDetails;
