import logo1 from "./logo1.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo1}
            className="KarinNaor-logo img-fluid"
            alt="logo"
          ></img>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer text-center">
          Coded by Karin Naor and is
          <a href="https://github.com/Karinnaor/karins-dictionary-project">
            {" "}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
