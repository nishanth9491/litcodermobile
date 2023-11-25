import "./App.css";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App" id="today">
      <Navbar />
      <div className="ok">
        <h1>litcoder</h1>
        <br />
        <button
          className="loginbtn"
          style={{ padding: "1rem 2rem", borderRadius: "1rem" }}
        >
          <a href="https://litcoder.in/login">Log in</a>
        </button>
      </div>
    </div>
  );
}

export default App;
