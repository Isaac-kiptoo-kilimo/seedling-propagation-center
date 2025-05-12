import { AdminOrdersGrid } from '../../components'
import Container from './AdminOrdersPageCSS'

const AdminOrdersPage = () => {
  return (
    <Container>
      <div className="create__order__btn">
        <button type="button" className="create__order--btn btn--primary"
        >
          Place Order
        </button>
      </div>
      <AdminOrdersGrid/>
    </Container>
  )
}

export default AdminOrdersPage
