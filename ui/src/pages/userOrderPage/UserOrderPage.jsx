import { UserOrdersGrid } from "../../components";
import Container from "./UserOrderPageCSS";

const UserOrderPage = () => {
  return (
    <Container>
      <div className="create__order__btn">
        <button type="button" className="create__order--btn btn--primary">
          Place Order
        </button>
      </div>
      <UserOrdersGrid />
    </Container>
  );
};

export default UserOrderPage;
