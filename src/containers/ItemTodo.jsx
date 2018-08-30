import React, { Component } from "react";


class ItemTodo extends Component{

render(){
  return (

  	<li>
  	  <strong>{this.props.content}</strong>
  	</li>
);

}
}

export default ItemTodo;