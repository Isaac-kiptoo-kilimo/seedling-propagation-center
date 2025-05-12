import { AdminOrdersGrid, UserOrdersGrid } from "../../components";
import Container from "./StaffDashboardCSS"

const StaffDashboard = () => {
  return (
    <Container>
     <div className="create__order__btn">
        <button type="button" className="create__order--btn btn--primary"
        >
          Place Order
        </button>
      </div>
      <AdminOrdersGrid/>
      {/* <UserOrdersGrid/> */}
  </Container>
  )
}

export default StaffDashboard;
