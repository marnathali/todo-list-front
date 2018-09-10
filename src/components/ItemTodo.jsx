import React, { Component } from "react";


class ItemTodo extends Component{


Li={
	display: "inline",
	paddingLeft: 6
}

render(){
  return (

  	<li style={this.Li}>
  	  <span>| {this.props.content}</span>
  	</li>
);

}
}

export default ItemTodo;