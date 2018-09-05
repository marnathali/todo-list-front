//DEPENDENCIES
import React from 'react';
import {Route} from 'react-router-dom';

//COMPONENTS
import App from '../containers/App.js';
import TodoList from '../containers/TodoList.jsx';
import FormTodo from '../containers/FormTodo.jsx';



class TodoListRoutes extends React.Component{
   render(){
   	return(

      <React.Fragment>
         <App />     
        
        <Route path='/todo-list' component={TodoList} />
        <Route path='/create-todo' component={FormTodo} />
       

      </React.Fragment>

   		);
   }

}

export default TodoListRoutes;