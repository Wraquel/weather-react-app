import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
      </div>
      <footer>
        This was coded by Raquel Wetzel and it is a{" "}
        <a href="https://github.com/Wraquel/my-weather-react-app">
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
