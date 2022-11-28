import dictionary_logo from "../../assets/dictionary_logo.png";
import Dictionary from "../Dictionary/Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary_logo}
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
