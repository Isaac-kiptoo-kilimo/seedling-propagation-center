import { FaSadTear } from "react-icons/fa";
import Container from "./SalesReportCSS";
import { sales } from "../../utils";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import { useGetAllSalesSummaryQuery } from "../../features/orders/orderApi";
const SalesReport = () => {
  const {
    data: salesData,
    isLoading: isSalesLoading,
    isError: isSalesError
  } =useGetAllSalesSummaryQuery()
  // Handle loading
  if (isSalesLoading) {
    return (
      <div style={{ paddingBottom: "2rem" }}>
        <LoadingSpinner />
      </div>
    );
  }
  
  // Handle error
  if (isSalesError) {
    return (
      <div
        className="metrics__error"
        style={{
          textAlign: "center",
          letterSpacing: "var(--letter-spacing)",
          color: "var(--primary-clr)",
          fontSize: "2rem",
          paddingBottom: "2rem",
          cursor: "pointer",
        }}
      >
        <p className="error__text">
          <FaSadTear />
        </p>
      </div>
    );
  }
  
  // Map the sales
  const updatedSales = sales.map((sale) => {
    if (sale.id === 2) {
      return { ...sale, count: salesData?.dailySales?.length || 0 };
    } else if (sale.id === 1) {
      return { ...sale, count: salesData?.weeklySales?.length || 0 };
    } else if (sale.id === 3) {
      return { ...sale, count: salesData?.totalSales || 0 };
    }
    return sale;
  });

  return (
    <section className="dashboard__sales">
      {updatedSales.map(({ id, title, icon, count, path }) => (
        <Container key={id}>
          <Link className="dashboard__sale" to={path}>
            <div className="sale__icon">{icon}</div>
            <div className="sale__info">
              <h5 className="sale__title">{title}</h5>
              <span className="sale__count">{count}</span>
            </div>
          </Link>
        </Container>
      ))}
    </section>
  );
};

export default SalesReport;
