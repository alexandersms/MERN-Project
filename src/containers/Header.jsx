import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {};
}

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <a href="" className="nav-link">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Ressources
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Connexion
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(Header);
