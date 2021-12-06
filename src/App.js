import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
      </div>
      <footer>
        <a href="https://github.com/Wraquel/weather-react-app">Open-source </a>{" "}
        by Raquel Wetzel
      </footer>
    </div>
  );
}

export default App;
