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


  	this.setState ({ title: event.target.value.toUpperCase()});
  	
	console.log('el state'+this.state.title);		
            
		}

		handleSubmit (event){
            //evita accion por defecto del evento
			event.preventDefault();
            //actualiza el state en un par clave: valor en concordancia con
            //el name del input

            if(document.getElementById('title').value !== ""){

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
				this.props.onUpdate();
			})
			.catch(function (error){
				console.log(error, ' TRY AGAIN');
				alert('Ocurrio un error chamita');
			});

			this.setState({
				title: "",
			})

            } else {
            	alert('Por favor ingrese una tarea antes!');
            }
			
		}

		handleCancel(){
			document.getElementById("title").value="";
			alert('ud cancelo la operacion');

		}


	Form = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexDirection: "row",
  padding: 10
}

Input={
  width: 150,
  padding: 2,
  margin: 5,
  boxSizing: "border-box",
  borderColor: "dodgerBlue",
  borderRadius: 4,
  backgroundColor: "ghostWhite",
  color: "midnightBlue"
}

Button={

  backgroundColor: "gray",
  color: "white",
  fontSize: 12,
  padding: 4,
  margin: 4,
  borderRadius: 4,
  border: "none",
  width: 80,
  float: "left"
}
Label={
color: "midnightBlue",
textAlign: "left",
fontSize: 15
}

container={
  borderBottom: "solid",
  color:"gray"
}

   render() {

    return (
        <div style={this.container}>
        <form style={this.Form} onSubmit={this.handleSubmit}>
         
          
            <label style={this.Label}>Task title:
            <input style={this.Input}  type="text" value={this.state.title}  name="title" id="title" placeholder="input the task title" onChange={this.handleChange}  />
             </label>
          <button style={this.Button} type="submit">Add Task</button>
          <button style={this.Button} type="button" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }



}

export default FormTodo;