import { useNavigate } from "react-router-dom";
import { StaffGrid } from "../../components";
import Container from "./StaffGridPageCSS";

const StaffGridPage = () => {
  const navigate=useNavigate();
  return (
    <Container>
      <div className="create__user__btn">
        <button type="button" className="create__user--btn btn--primary"
        onClick={()=>navigate('/create-staff')}
        >
          Add Staff
        </button>
      </div>
      <StaffGrid />
    </Container>
  );
};

export default StaffGridPage;
