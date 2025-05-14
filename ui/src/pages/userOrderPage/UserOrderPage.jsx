import { useNavigate } from "react-router-dom";
import { UserOrdersGrid } from "../../components";
import Container from "./UserOrderPageCSS";

const UserOrderPage = () => {
  const navigate=useNavigate();
  return (
    <Container>
      <div className="order__top--content">
        <div className="orders__dashboard__title"><h4>Orders</h4></div>
      <div className="create__order__btn">
        <button type="button" className="create__order--btn btn--primary"
        onClick={()=>navigate('/shop/products')}
        >
          Place Order
        </button>
       </div>
      </div>
      <UserOrdersGrid />
    </Container>
  );
};

export default UserOrderPage;
