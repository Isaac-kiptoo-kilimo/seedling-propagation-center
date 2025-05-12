import Container from "./SingleUserCSS";
// import { getEmployeeInitials } from "../../utils";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DeleteModal from "../deleteModal/DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../features/configurations/configurationSlice";
import { useRemoveUserMutation } from "../../features/auth/userApi";
import { toast } from "react-toastify";
import { getUserInitials } from "../../utils";

const SingleUser = ({ _id, fullName, email,phoneNumber, isAdmin }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditUser = () => {
    dispatch(
      setSelectedUser({
        _id,
        fullName,
        email,
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
    <Container>
      <>
        <Link to={`/edit-user/${_id}`} className="single-employee__profile">
          <span className="single-employee__placeholder-profile">
            {getUserInitials(fullName)}
          </span>

          <div className="single-employee__info">
            <h5 className="single-employee__name">{`${fullName}`}</h5>
            <h5 className="single-employee__name">{email}</h5>
            <h5 className="single-employee__name">{phoneNumber}</h5>
          </div>
        </Link>
      </>

      {isAdmin && (
        <div className="employee-buttons">
          <button onClick={handleEditUser} className="single-employee__edit">
            <MdEdit />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="single-employee__delete"
          >
            <FaTrash />
          </button>
        </div>
      )}
      {isModalOpen && (
        <DeleteModal
          handleDelete={handleDeleteUser}
          setIsModalOpen={setIsModalOpen}
          item="user"
        />
      )}
    </Container>
  );
};

export default SingleUser;
