import React, { Component } from "react";
//componente de presentacion para cada uno de los todos de la lista
//se encarga de hacer la peticion al servidor
import Task from './Task.jsx';
import {getTodos} from '../utils/api.js';

class TodoList extends Component {
  
  constructor (props){
  	super(props);

/*estado inicial todoList= arreglo vacio, 
loading indica si la lista esta disponible*/
  	this.state={
  		todoList: [],
  		loading : true,

  	};
  }
  
  /*Una vez que el componente se ha montado
  invocamos la funcion para llenar la lista.
  */
  componentDidMount(){
  	getTodos()
  	  .then((res)=>{
  	  	this.setState({
  	  		todoList: res.data,
  	  		loading: false,
  	  	});
  	  	console.log(res)

  	  })
  	  .catch((err)=> console.log(err));
  }


/*itera por cada elemento de la lista y lo convierte en una lista de
componentes Todo*/
  renderTodos = ()=>{
    const {todoList} = this.state;
    
    return todoList.map(todo =>{
    	const{title, id, todoItems} = todo;



    	return (
          <Task
            key={id}
            title={title}
            todoItems= {todoItems}
          />

         
       
    		);
    });
  }
  

  container = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  backgroundColor: "blue"
  };


  render() {
  	const {loading} = this.state;
    return (
    	<div style={this.container}>
      <React.Fragment>
        {loading ? 'loading...': this.renderTodos()}
        
      </React.Fragment>

      </div>
    );
  }
}

export default TodoList;