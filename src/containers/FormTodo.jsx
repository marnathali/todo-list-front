import React, { Component } from 'react';

import '../style/index.css';

import axios from 'axios';

class FormTodo extends Component {

 constructor (props){
 	super(props);

 	this.state = {
 		title: ' ',
 	};
 	//si usas arrow function esto no es necesario.
 	this.handleChange = this.handleChange.bind(this);
 	this.handleSubmit = this.handleSubmit.bind(this);
 	this.handleCancel = this.handleCancel.bind(this);

 }


  handleChange (event){
  	//maneja los cambios ocurridos en el input
  	//util para validaciones antes del que usuario envie
  	console.log('el target'+event.target);
  	console.log('el value'+event.target.value);

  	this.setState ({ title: event.target.value});
  	
	console.log('el state'+this.state.title);		
            
		}

		handleSubmit (event){
            //evita accion por defecto del evento
			event.preventDefault();
            //actualiza el state en un par clave: valor en concordancia con
            //el name del input
			this.setState({
				title: event.target.value,
			});

			//post request con axios
			//requiere de los "atributos" que seran añadidos
			//segun el endpoint
			axios.post('http://localhost:8000/api/todos',{
				title: this.state.title,
			})
			.then(res =>{
				console.log(res, ' title added');
				console.log(res.data);
				alert('A title was submited: ' + this.state.title);
			})
			.catch(function (error){
				console.log(error, ' TRY AGAIN');
				alert('Ocurrio un error chamita');
			});

			this.setState({
				title: "",
			})

		}

		handleCancel(){
			document.getElementById("title").value="";

		}


   render() {
    //var value = this.state.value;
    return (
        <div>
        <form className="Form" onSubmit={this.handleSubmit}>
          <label>
            Task title:
            <input className="Input" type="text" value={this.state.title}  name="title" id="title" onChange={this.handleChange} placeholder="input the task title" />
          </label>
          <button className="Button" type="submit">Add Task</button>
          <button className="Button" type="button" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }



}

export default FormTodo;