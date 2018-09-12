import React, { Component } from "react";


class ItemTodo extends Component{

render(){
  return (

  	<li>
  	  <small>| {this.props.content} </small>
  	</li>
);

}
}

export default ItemTodo;