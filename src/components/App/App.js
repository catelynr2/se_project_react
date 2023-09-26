import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="weather" id="weather">
          <div className="weather__info">75F</div>
          <img src="/images/Day/Sunny.svg" className="weather__image" />
        </section>
        <section id="card-section">cards</section>
      </main>
    </div>
  );
}

export default App;
