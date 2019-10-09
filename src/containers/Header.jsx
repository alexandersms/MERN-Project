import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authentification.isLoggedIn
  };
};

class Header extends Component {
  handleAuthentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn);
  };

  renderAuthentificationLabel = () => {
    if (this.props.isLoggedIn) {
      return "Déconnexion";
    } else {
      return "Connexion";
    }
  };

  render() {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ressources" className="nav-link">
            Ressources
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to=""
            className="nav-link"
            onClick={this.handleAuthentification}
          >
            {this.renderAuthentificationLabel()}
          </Link>
        </li>
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(Header);

export { Header };
