import Container from "./SidebarCSS";
import { adminLinks, getUserInitials, staffLinks, userLinks } from "../../utils";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/configurations/configurationSlice";
// import { useEffect } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.configurations);
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);

  if (!user) {
    return;
  }
  const {
    fullName,
    role
    } = user;

  return (
    <Container>
      <aside className={isSidebarOpen ? "sidebar sidebar--active" : "sidebar"}>
        <div className="sidebar__header">
          <button
            className="sidebar__close"
            onClick={() => dispatch(toggleSidebar())}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="sidebar__content">
          <div className="sidebar__profile">
              <span className="profile__placeholder">
                {getUserInitials(fullName)}
              </span>
            <div className="profile__info">
              <h5 className="profile__name">{fullName}</h5>
              <p className="profile__role">{role}</p>
              {/* <p className="profile__role">{fullName}</p> */}
            </div>
          </div>
          <h5 className="links__title">main menu</h5>
          <div className="sidebar__links">
            {role === "admin"
              ? adminLinks.map(({ id, icon, text, path }) => {
                  return (
                    <NavLink
                      key={id}
                      to={path}
                      onClick={() => dispatch(toggleSidebar())}
                      className={({ isActive }) =>
                        isActive
                          ? "sidebar__link sidebar__link--active"
                          : "sidebar__link"
                      }
                    >
                      {icon}
                      <span className="link__text">{text}</span>
                    </NavLink>
                  );
                })
              : role === "staff"
              ? staffLinks.map(({ id, icon, text, path }) => {
                  return (
                    <NavLink
                      key={id}
                      to={path}
                      onClick={() => dispatch(toggleSidebar())}
                      className={({ isActive }) =>
                        isActive
                          ? "sidebar__link sidebar__link--active"
                          : "sidebar__link"
                      }
                    >
                      {icon}
                      <span className="link__text">{text}</span>
                    </NavLink>
                  );
                })
                : userLinks.map(({ id, icon, text, path }) => {
                  return (
                    <NavLink
                      key={id}
                      to={path}
                      onClick={() => dispatch(toggleSidebar())}
                      className={({ isActive }) =>
                        isActive
                          ? "sidebar__link sidebar__link--active"
                          : "sidebar__link"
                      }
                    >
                      {icon}
                      <span className="link__text">{text}</span>
                    </NavLink>
                  );
                })
                
                }
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default Sidebar;
