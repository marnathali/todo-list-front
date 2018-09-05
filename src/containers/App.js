import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import '../style/App.css';

class App extends Component {

  active = {
    fontWeight: "bold",
    color: "red"
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" style={this.header}>
          
          <h1 className="App-title">TODO LIST</h1>
          <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>
        <NavLink exact to="/todo-list" activeStyle={this.active}>
          Lista de tareas
        </NavLink>
        <NavLink exact to="/create-todo" activeStyle={this.active}>
          Crea una tarea
        </NavLink>
        </header>
      </div>
    );
  }
}

export default App;
