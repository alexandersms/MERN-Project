import React, { Component } from "react";
import Header from "../containers/Header";
import Home from "./Home";
import Ressources from "./Ressources";
import { Switch, Route } from "react-router-dom";
import RequireAuthentification from "../helpers/RequireAuthentification";

require("../style.css");
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/ressources"
            component={RequireAuthentification(Ressources)}
          />
        </Switch>
      </div>
    );
  }
}
