import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";


function App() {
  return (
    <div className="background-custom">
      <Navbar />
      <MainBody />
    </div>
  );
}

export default App;
