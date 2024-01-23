import "./Header.css";
import logo from "../../images/Logo.svg";
// import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  onCreateModal,
  onSignUp,
  onLogin,
  loggedIn,
  userLocation,
}) => {
  console.log("Header");
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const currentAvatar = currentUser?.avatar !== "" ? true : false;

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div className="header__date-location">
          {currentDate}, {userLocation}
        </div>
      </div>
      <div className="header__menu-right">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <div>
              <button
                className="header__add-button"
                type="text"
                onClick={onCreateModal}
              >
                + Add New Clothes
              </button>
            </div>
            <Link to="/profile">
              <div className="header__name">{currentUser?.name}</div>
            </Link>
            {currentAvatar ? (
              <div className="header__avatar">
                <img
                  src={currentUser?.avatar}
                  className="header__avatar"
                  alt="avatar"
                />
              </div>
            ) : (
              <p className="header__avatar-default">
                {currentUser?.name[0].toUpperCase()}
              </p>
            )}
          </>
        ) : (
          <>
            <button
              className="header__register"
              type="button"
              onClick={onSignUp}
            >
              Sign Up
            </button>
            <button className="header__login" type="button" onClick={onLogin}>
              Login
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
