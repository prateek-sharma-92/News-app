import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Results from "./Components/ResultPage/Results";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Results">
        <Results />
        <Results />
        <Results />
      </div>
    </div>
  );
}

export default App;
