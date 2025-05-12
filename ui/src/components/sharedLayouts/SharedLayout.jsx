import Container from "./SharedLayoutCSS.js";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, SharedNavbar, Sidebar } from "../";
import { useSelector } from "react-redux";
const SharedLayout = () => {
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);
  const isAuthenticated = !!user;

  return (
    <Container>
      {isAuthenticated ? <SharedNavbar /> : <Navbar />}

      <main className={isAuthenticated ? "main" : "default"}>
        {isAuthenticated && <Sidebar />}
        <Outlet />
      </main>
      {isAuthenticated ? null : <Footer/>}
    </Container>
  );
};

export default SharedLayout;
