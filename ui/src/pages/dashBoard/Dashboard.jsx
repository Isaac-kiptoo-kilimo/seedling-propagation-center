import {  MetricCards, UsersGrid } from "../../components";
import Container from "./DashboardCSS";

const Dashboard = () => {
  return (
    <Container>
      <h5 className="dashboard__title">dashboard</h5>
      <MetricCards />
      <UsersGrid title="users" />
    </Container>
  );
};

export default Dashboard;
