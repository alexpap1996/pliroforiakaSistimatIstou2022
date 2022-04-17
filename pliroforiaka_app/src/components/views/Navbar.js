import mainLogo from "../../resources/gardenblack.png";
import SearchBox from "../SearchBox";
import { useState } from "react";
function Navbar(state) {
  const { changePageNameFn, updateSearchTerm } = state;

  return (
    <nav className="navbar navbar-expand-lg navbar-light c-bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="" href="" onClick={() => changePageNameFn("Home")}>
            <img
              src={mainLogo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>
          <a
            className="navbar-brand "
            href="#"
            onClick={() => changePageNameFn("Home")}
          >
            GreenTips
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => changePageNameFn("Home")}
              >
                Αρχικη Σελιδα
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                onClick={() => changePageNameFn("Articles")}
              >
                Άρθρα
              </a>
            </li>
            <SearchBox updateSearchTerm={updateSearchTerm}/>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className="nav-link"
                href="#"
                onClick={() => changePageNameFn("CommunicationPage")}
              >
                Επικοινωνία
              </a>
            </li>
            <li className="nav-item me-2">
              <a
                className="nav-link"
                href="#"
                onClick={() => changePageNameFn("About")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn hover-dark c-bg-green me-2"
                type="submit"
                onClick={() => changePageNameFn("Login")}
              >
                Συνδεση
              </button>
            </li>
            <li className="nav-item">
              <button className="btn me-2 hover-dark c-bg-green" type="submit">
                Εγγραφή
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
