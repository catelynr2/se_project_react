import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const weatherTemp = "75°F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New garment" />
      <label>
        Name
        <input type="text" name="name" minLength="1" maxLength="30" />
      </label>
      <label>
        Image
        <input type="url" name="link" minLength="1" maxLength="30" />
      </label>
    </div>
  );
}

export default App;
