import "./ErrorPage.css";
import { TfiFaceSad } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);
  const isAuthenticated = !!user;

  useEffect(() => {
    if (isAuthenticated) {
      const roleRoutes = {
        admin: "/admin/dashboard",
        user: "/user/profile",
        staff: "/staff/orders",
      };

      const targetRoute = roleRoutes[user.role] || "/";

      navigate(targetRoute);
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="error-page">
      <div className="error-page__info">
        <span className="error-page__icon">
          <TfiFaceSad />
        </span>
        <p className="error-page__text">
          <span>404</span>, the page you are looking for cannot be found!
        </p>
        <Link to="/" className="btn--primary error-page__btn">
          back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
