import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import Item from "./components/Item";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
