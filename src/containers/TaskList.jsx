import React, { Component } from "react";
//componente de presentacion para cada uno de los todos de la lista
//se encarga de hacer la peticion al servidor
import Task from '../components/Task.jsx';
//import {getTodos} from '../utils/api.js';

class TaskList extends Component {
  
 // constructor (props){
  //	super(props);

/*estado inicial todoList= arreglo vacio, 
loading indica si la lista esta disponible*/
  	/*this.state={
  		todoList: [],
  		loading : true,

  	};*/

    //this.handleActualizar = this.handleActualizar.bind(this);
  //}

  
  /*Una vez que el componente se ha montado
  invocamos la funcion para llenar la lista.
  */
/*  
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

  handleActualizar(){
     getTodos()
       .then((res)=>{
         this.setState({
          todoList: res.data,
          loading: false,
         });
         console.log('funciona handleActualizar'+res)
       })
  }
*/

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

         
       
    		);
    });
  }
  

  container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingLeft: 25
  };


  render() {
    console.log(this.state);
  	const {loading} = this.props;
    return (
    	<div style={this.container}>
      <h2>Todo List: </h2>
      <React.Fragment>
        {loading ? 'loading...': this.renderTodos()}
        
      </React.Fragment>

      </div>
    );
  }
}

export default TaskList;