import React, { Component } from "react";
//componente de presentacion para cada uno de los todos de la lista
//se encarga de hacer la peticion al servidor
import Task from '../components/Task.jsx';
//import {getTodos} from '../utils/api.js';

class TaskList extends Component {
  
  
  /*itera por cada elemento de la lista y lo convierte en una lista de
componentes Todo*/
  renderTodos = ()=>{
    const {todoList} = this.props;
    
    return todoList.map(todo =>{
    	const{title, id, todoItems} = todo;



    	return (
          <Task
            key={id}
            id={id}
            title={title}
            todoItems= {todoItems}
            onUpdate={this.props.onUpdate}
          />

         //en AppTodo podemos ver la prop onUpdate que le hemos pasado
         // y por esa razon aca podemos usarla
       
    		);
    });
  }
  

  container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingLeft: 10,
  color: "dimGray"

  };


  render() {
    console.log(this.state);
  	const {loading} = this.props;
    return (
    	<div style={this.container}>
      <h4>Todo List: </h4>
      <React.Fragment>
        {loading ? 'loading...': this.renderTodos()}
        
      </React.Fragment>

      </div>
    );
  }
}

export default TaskList;