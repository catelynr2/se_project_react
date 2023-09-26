import "./Header.css";

const Header = () => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="/images/Logo.svg" className="App-logo" alt="logo" />
        </div>
        <div>date</div>
      </div>
      <div className="header__avatar">
        <div>
          <button type="text">+ Add New Clothes</button>
        </div>
        <div>name</div>
        <div>
          <img src="/images/Avatar.svg" className="" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
