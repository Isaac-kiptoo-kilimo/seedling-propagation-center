import { useNavigate } from "react-router-dom";
import Container from "./AdminProductsGridPageCSS";
import { AdminProductsGrid } from "../../components";

const AdminProductsGridPage = () => {
  const navigate=useNavigate();
  return (
    <Container>
    
      <AdminProductsGrid />
    </Container>
  );
};

export default AdminProductsGridPage;
