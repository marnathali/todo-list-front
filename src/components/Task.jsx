import React, { Component } from "react";
import axios from 'axios';

import ItemTodo from './ItemTodo.jsx';

class Task extends Component{
  constructor(props){
    super(props);
    this.state={};

    this.handleDelete= this.handleDelete.bind(this);

  }

  handleDelete(){
     const task = this.props.id;
     const url = `http://localhost:8000/api/todos/${task}`;

     axios.delete(url)
     .then(res =>{
      console.log(res);
      console.log(res.data);
      alert('ud elimino la tera '+ this.props.id);
      this.props.onUpdate()
     })
     .catch(err =>{
      console.log(err);
      alert('TRY AGAIN LADY...');
     });
     console.log('este es el id '+this.props.title);
     console.log('task: '+ task);
     console.log('url: '+url);


  }


	render(){
		return(
			<div>
           <input type="radio" onChange={this.handleDelete}/>     
           <h4>{this.props.title}</h4>
           <ul>
              {this.props.todoItems.map( item=>{
              	const{content, id}= item;
              
              return <ItemTodo
                        key= {id}
                        content= {content}
                        />
              })
              
               }</ul>
               </div>

			);
	};

}

export default Task;