import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import About from "./components/About";

function App() {
  return (
    <div className="background-custom">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
