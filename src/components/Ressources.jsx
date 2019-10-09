import React, { Component } from "react";
import { connect } from "react-redux";
import { addRessource } from "../actions";

class Ressources extends Component {
  renderRessource = ressources =>
    ressources.map(ressource => <li key={ressource}>{ressource}</li>);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              type="button"
              onClick={() => this.props.addRessource()}
              className="btn btn-raised btn-primary mt-3"
            >
              Ajouter un nombre
            </button>
          </div>
          <div className="col mt-3">
            Entiers<ul>{this.renderRessource(this.props.integerRessources)}</ul>
          </div>
          <div className="col mt-3">Contiennent "1"</div>
          <div className="col mt-3">Entiers premiers</div>
          <div className="col mt-3">Entiers premiers contenant "1"</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  integerRessources: state.ressource.ressourceList
});

const mapDispatchToProps = {
  addRessource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ressources);
