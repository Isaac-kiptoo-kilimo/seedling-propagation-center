import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../deleteModal/DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../features/configurations/configurationSlice";
import { toast } from "react-toastify";
import Container from "./SingleStaffCSS";
import { useDeactivateStaffMutation, useRemoveStaffMutation, useRestoreStaffMutation } from "../../features/auth/userApi";
import { getUserInitials } from "../../utils";
import { Tooltip } from "react-tooltip";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";


const SingleStaff = ({ _id, fullName, email,isActive, phoneNumber, isAdmin }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditStaff = () => {
    dispatch(
      setSelectedUser({
        _id,
        fullName,
        email,
        isAdmin,
      })
    );
    navigate(`/edit-staff/${_id}`);
  };
  const [removeStaff] = useRemoveStaffMutation();
  const [deactivateStaff] = useDeactivateStaffMutation();
  const [restoreStaff] = useRestoreStaffMutation();
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
    <Container>
      <>
        <Link to={`/colleagues/${_id}`} className="single-staff__profile">
          <span className="single-staff__placeholder-profile">
            {getUserInitials(fullName)}
          </span>

          <div className="single-staff__info">
            <h5 className="single-staff__name">{`${fullName}`}</h5>
            <h5 className="single-staff__name">{email}</h5>
            <h5 className="single-staff__name">{phoneNumber}</h5>
          </div>
        </Link>
      </>

      {isAdmin && (
        <div className="staff-buttons">
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

export default SingleStaff;
