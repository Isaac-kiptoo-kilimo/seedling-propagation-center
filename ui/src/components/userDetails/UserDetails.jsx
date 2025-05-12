import Container from "./UserDetailsCSS";
import { getUserInitials } from "../../utils";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../deleteModal/DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRemoveUserMutation } from "../../features/auth/userApi";
import { toast } from "react-toastify";
import { setSelectedUser } from "../../features/configurations/configurationSlice";

const UserDetails = ({ _id, fullName, email, role, phoneNumber, isAdmin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUser = () => {
    dispatch(
      setSelectedUser({
        _id,
        fullName,
        email,
        role,
        isAdmin,
      })
    );
    navigate(`/edit-user/${_id}`);
  };

  const [RemoveUser] = useRemoveUserMutation();

  const handleDeleteUser = async () => {
    try {
      const response = await RemoveUser(_id);
      if (response && response.error) {
        toast.error(response.error.data.message);
      } else {
        if (response && response.data.success === true) {
          toast.success(response.data.message);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 1000);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error("An error occured while deleting");
    }
  };
  return (
    <Container
      className="employee__row"
   
    >
      <Link to={`/edit-user/${_id}`} className="single-employee__profile">
        <span className="profile__placeholder">
          {getUserInitials(fullName)}
        </span>

        <p className="single-employee__name">{`${fullName}`}</p>
      </Link>
      <div className="single-employee__role">{role}</div>
      <div className="single-employee__role"> {email}</div>
      <div className="single-employee__role"> {phoneNumber}</div>
      {isAdmin && (
        <div className="single-employee__actions">
          <button onClick={handleEditUser} className="single-employee__edit">
            <MdEdit />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="single-employee__delete"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      )}
      {isModalOpen && (
        <DeleteModal
          handleDelete={handleDeleteUser}
          item="employee"
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Container>
  );
};

export default UserDetails;
