import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
