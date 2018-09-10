import React, { Component } from 'react';

import FormTodo from '../containers/FormTodo.jsx';
import TaskList from '../containers/TaskList.jsx';
import FormItem from '../containers/FormItem.jsx';
import {getTodos} from '../utils/api.js';

class AppTodo extends Component {
  constructor(props){
    super(props);

    
/*estado inicial todoList= arreglo vacio, 
loading indica si la lista esta disponible*/
    this.state={
      todoList: [],
      loading : true,

    };
    this.handleUpdate = this.handleUpdate.bind(this); 
   
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

  handleUpdate(){
     getTodos()
      .then((res)=>{
        this.setState({
          todoList: res.data,
          loading: false,
        });
        console.log(res)
        console.log('esto esta funcionando');

      })
  }


containerForm={
    display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}

containerApp={
  display: "flex",
  flexDirection: "row",
  padding: 20
}

containerList={
 
    display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  border: "solid",
  color:"gray"
}

	render(){

	return(
        <div style = {this.containerApp}>
			<div style={this.containerForm}>
         <FormTodo onUpdate={this.handleUpdate}/>
         <FormItem  onUpdate={this.handleUpdate} todoList={this.state.todoList}/> 
      </div>
      <div style={this.containerList}>
         <TaskList
         todoList={this.state.todoList}
         loading={this.state.loading}
         onUpdate ={this.handleUpdate}
          />
       </div>
          </div>

		)
	}

}

export default AppTodo;