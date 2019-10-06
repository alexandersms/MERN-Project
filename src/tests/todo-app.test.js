import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "../components/todo-app";
import { shallow } from "enzyme";

describe("Test TodoApp fonctionnement", () => {
  it("Render le composant TodoApp sans erreur", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TodoApp />, div);
  });

  it("Contient la chaine 'Nouvelle tâche'", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TodoApp />, div);
    expect(div.innerHTML).toContain("Nouvelle tâche");
  });

  it("Render le composant TodoApp sans erreur avec shallow", () => {
    const wrapper = shallow(<TodoApp />);
  });

  it("Contient la chaine 'Nouvelle tâche' avec shallow", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.html()).toContain("Nouvelle tâche");
  });

  it("Possède 2 classes css 'row'", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.find(".row").length).toEqual(2);
  });

  it("Possède 1 id css 'addButton'", () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.find("#addButton").length).toEqual(1);
  });
});
