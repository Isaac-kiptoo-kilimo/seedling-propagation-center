import { SalesReport } from '../../components'
import Container from './AdminSalesReportCSS'

const AdminSalesReport = () => {
  return (
    <Container>
      <div className="order__top--content">
        <div className="orders__dashboard__title"><h4>Sales</h4></div>
      </div>
      <SalesReport/>
    </Container>
  )
}

export default AdminSalesReport;
