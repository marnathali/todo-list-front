import React, { Component } from "react";


import ItemTodo from './ItemTodo.jsx';

class Task extends Component{


	render(){
		return(
			<div>
           <h2>{this.props.title}</h2>
           <ul>
              {this.props.todoItems.map( item=>{
              	const{content, todoId}= item;
              
              return <ItemTodo
                        key= {todoId}
                        content= {content}
                        />
              })
              
               }</ul>
               </div>

			);
	};

}

export default Task;