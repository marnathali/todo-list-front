//DEPENDENCIES
import React from 'react';
import {Route} from 'react-router-dom';

//COMPONENTS
import Header from '../components/Header.js';
import AppTodo from '../containers/AppTodo.jsx';
//import TaskList from '../containers/TaskList.jsx';
//import FormTodo from '../containers/FormTodo.jsx';



class TodoListRoutes extends React.Component{
   render(){
   	return(

      <React.Fragment>
         <Header />     
        <Route path='/' exact component={AppTodo} />
       

      </React.Fragment>

   		);
   }

}

export default TodoListRoutes;