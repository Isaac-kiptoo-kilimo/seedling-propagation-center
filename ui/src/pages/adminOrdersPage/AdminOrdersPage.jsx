import { AdminOrdersGrid } from '../../components'
import Container from './AdminOrdersPageCSS'

const AdminOrdersPage = () => {
  return (
    <Container>
      <div className="order__top--content">
        <div className="orders__dashboard__title"><h4>Orders</h4></div>
      </div>
      <AdminOrdersGrid/>
    </Container>
  )
}

export default AdminOrdersPage
