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
        <div>{currentDate},</div>
        <div>Florida</div>
      </div>
      <div className="header__avatar">
        <div>
          <button type="text" onClick={onCreateModal}>
            + Add New Clothes
          </button>
        </div>
        <div>Catelyn Richard</div>
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
