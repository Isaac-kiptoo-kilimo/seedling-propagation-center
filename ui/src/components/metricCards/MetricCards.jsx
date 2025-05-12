import { FaSadTear } from "react-icons/fa";
import Container from "./MetricCardsCSS";
import { insights } from "../../utils";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import {
  useGetAllStaffQuery,
  useGetAllUsersQuery,
} from "../../features/auth/userApi";
import { useGetAllSalesSummaryQuery } from "../../features/orders/orderApi";
const MetricCards = () => {
  const {
    data: usersData,
    isLoading: isUsersLoading,
    isError: isUsersError
  } = useGetAllUsersQuery();
  const {
    data: staffData,
    isLoading: isStaffLoading,
    isError: isStaffError
  } = useGetAllStaffQuery();

  const {
    data: salesData,
    isLoading: isSalesLoading,
    isError: isSalesError
  } =useGetAllSalesSummaryQuery()
  // Handle loading
  if (isUsersLoading || isStaffLoading || isSalesLoading) {
    return (
      <div style={{ paddingBottom: "2rem" }}>
        <LoadingSpinner />
      </div>
    );
  }

  // Handle error
  if (isUsersError || isStaffError || isSalesError) {
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
  
  
  // Map the insights
  const updatedInsights = insights.map((insight) => {
    if (insight.id === 2) {
      return { ...insight, count: usersData?.users?.length || 0 };
    } else if (insight.id === 1) {
      return { ...insight, count: staffData?.staff?.length || 0 };
    } else if (insight.id === 3) {
      return { ...insight, count: salesData?.totalSales || 0 };
    }
    return insight;
  });

  return (
    <section className="dashboard__insights">
      {updatedInsights.map(({ id, title, icon, count, path }) => (
        <Container key={id}>
          <Link className="dashboard__insight" to={path}>
            <div className="insight__icon">{icon}</div>
            <div className="insight__info">
              <h5 className="insight__title">{title}</h5>
              <span className="insight__count">{count}</span>
            </div>
          </Link>
        </Container>
      ))}
    </section>
  );
};

export default MetricCards;
