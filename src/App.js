import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
      </div>
      <footer>
        <a href="https://github.com/Wraquel/weather-react-app">Open-sourced </a>{" "}
        by Raquel Wetzel
      </footer>
    </div>
  );
}

export default App;
