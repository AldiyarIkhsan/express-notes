import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <h2 style={{ color: "white" }}>Static Pages</h2>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="all"
        end
      >
        All
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="star-wors"
      >
        Star Wors
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="famous-people"
      >
        Famous People
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="saying"
      >
        Saying
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="humour"
      >
        Humour
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="motivational"
      >
        Motivational
      </NavLink>
    </nav>
  );
};

export default Menu;
