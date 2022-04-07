import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/views/Navbar";
import MainBody from "./components/MainBody";

class App extends React.Component {
  state = {
    pageName: 'ErrorPage'
  }

  constructor(props) {
    super(props)

    this.changePageName = this.changePageName.bind(this)
  }

  changePageName(pageName) {
    this.setState({pageName});
  }

  render() {
    return (
      <div className="background-custom">
        <Navbar 
          changePageNameFn={this.changePageName}
        />
        <MainBody 
          pageName={this.state.pageName}
          changePageNameFn={this.changePageName}
        />
      </div>
    )
  }
}

export default App
