import React, { Component } from 'react';
//import { NavLink } from "react-router-dom";

import '../style/App.css';

class Header extends Component {

  active = {
    fontWeight: "bold",
    color: "red"
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
  };

  App={
    textAlign: "center"
  }

  render() {
    return (
      <div style={this.App}>
        <header className="App-header" style={this.header}>
          
          <h1 className="App-title">TODO LIST</h1>
                
        </header>
      </div>
    );
  }
}

export default Header;


/*<NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>*/