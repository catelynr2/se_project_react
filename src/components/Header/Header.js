import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");

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
        <div>date</div>
      </div>
      <div className="header__avatar">
        <div>
          <button type="text" onClick={onCreateModal}>
            + Add New Clothes
          </button>
        </div>
        <div>name</div>
        <div>
          <img
            src={require("../images/Avatar.svg").default}
            className=""
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
