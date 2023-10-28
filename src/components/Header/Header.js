import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ onCreateModal }) => {
  console.log("Header");
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </div>
        <div className="header__date-location">{currentDate}, Florida</div>
      </div>
      <div className="header__menu-right">
        <ToggleSwitch />
        <div>
          <button
            className="header__add-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </button>
        </div>
        <Link to="/profile" className="header__name">
          Catelyn Richard
        </Link>
        <div className="header__avatar">
          <img src={avatar} className="header__avatar" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
