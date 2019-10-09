import React from "react";
import Header from "../containers/Header";
import { shallow, mount } from "enzyme";
import { setAuthentification } from "../actions";
import { SET_AUTHENTIFICATION } from "../actions/action-types";
import AuthentificationReducer from "../reducers/authentification";
import RootTest from "./root-test";

describe("Test sur header", () => {
  it("Render du composant connecté sans erreur", () => {
    const wrapper = shallow(
      <RootTest>
        <Header />
      </RootTest>
    );
  });

  it("Test que le libellé du bouton connexion est bien 'connexion' puis 'déconnexion' après clique", () => {
    const wrapper = mount(
      <RootTest>
        <Header />
      </RootTest>
    );
    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Connexion");
    wrapper
      .find("a")
      .at(2)
      .simulate("click");
    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Déconnexion");
  });
});
