import "./Header.css";

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
          <img
            src={require("../images/Logo.svg").default}
            className="App-logo"
            alt="logo"
          />
        </div>
        <div className="header__date-location">{currentDate}, Florida</div>
      </div>
      <div className="header__menu-right">
        <div>
          <button
            className="header__add-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </button>
        </div>
        <div className="header__name">Catelyn Richard</div>
        <div className="header__avatar">
          <img
            src={require("../images/Avatar.svg").default}
            className="header__avatar"
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
