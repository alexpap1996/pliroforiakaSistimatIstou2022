import "./App.css";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import Contact from "./components/ContactForm";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Make it Green</title>
        <link rel="canonical" href="" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Navbar />
      <Contact />
    </>
  );
}

export default App;
