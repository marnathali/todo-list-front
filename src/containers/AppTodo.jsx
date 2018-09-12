import React, { Component } from 'react';

import FormTodo from '../containers/FormTodo.jsx';
import TaskList from '../containers/TaskList.jsx';
import {getTodos} from '../utils/api.js';

class AppTodo extends Component {
  constructor(props){
    super(props);
    this.state={
      todoList: [],
      loading : true,

    };
    this.handleUpdate = this.handleUpdate.bind(this); 
   
  }


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


containerTodo={
    display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
}

	render(){

	return(
			<div style={this.containerTodo}>
         <FormTodo onUpdate={this.handleUpdate}/>
         <TaskList
         todoList={this.state.todoList}
         loading={this.state.loading}
         onUpdate ={this.handleUpdate}

          />
             
      </div>
		)
	}

}

export default AppTodo;