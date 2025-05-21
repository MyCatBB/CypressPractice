import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../auth";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="Header__container">
      <div className="Header__linkContainer">
        <Link to="/home" className="Header__pageLink">
          Home
        </Link>
        <Link to="/about" className="Header__pageLink">
          About BB
        </Link>
        <Link to="/gallery" className="Header__pageLink">
          BB's Gallery
        </Link>
      </div>
      <button className="Header__logOut" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
