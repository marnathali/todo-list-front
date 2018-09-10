import React, {Component} from 'react';

import axios from 'axios';

import SelectTask from '../components/SelectTask.jsx';

class FormItem extends Component{

	constructor(props){
		super(props);
		this.state={
			content: '',
			todoId: '',
		}

		this.handleChangeContent = this.handleChangeContent.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeSelect = this.handleChangeSelect.bind(this);
	};


	
	handleChangeSelect(event){
			this.setState({todoId: event.target.value})
			alert(this.state.todoId);

		}


	 handleChangeContent (event){
  	//maneja los cambios ocurridos en el input
  	//util para validaciones antes del que usuario envie
  	console.log('el target'+event.target);
  	console.log('el value'+event.target.value);


  	this.setState ({ content: event.target.value.toLowerCase()});
  	
	console.log('el state'+this.state.content);		
            
		}


		handleCancel(){
			document.getElementById("content").value="";
			alert('ud cancelo la operacion');

		}

     handleSubmit(event){

     	event.preventDefault();

     	if(document.getElementById('content').value !== ""){
            this.setState({
				content: event.target.value,
			});
            console.log('content: '+ this.state.content);
			const todoId = this.state.todoId;
			console.log('el id de todo: '+ todoId);
			const urlItem = `http://localhost:8000/api/todos/${todoId}/items`;
             console.log('la url de item: '+ urlItem);

			//post request con axios
			//requiere de los "atributos" que seran añadidos
			//segun el endpoint
			axios.post(urlItem, {
				content: this.state.content,
			})
			.then(res =>{
				console.log(res, ' content added');
				console.log(res.data);
				alert('A content was submited: ' + this.state.content);
				this.props.onUpdate();
			})
			.catch(function (error){
				console.log(error, ' TRY AGAIN');
				alert('Ocurrio un error chamita');
			});

			this.setState({
				content: "",
			})

            } else {
            	alert('Por favor ingrese un Item primero!');
            }


     }

	Form = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexDirection: "row",
	width: 400,
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

	render(){
 
		return(
           <div style = {this.container} >
	           <SelectTask todoList={this.props.todoList}
	           onUpdate={this.props.onUpdate}
	           onChange={this.handleChangeSelect}
	           />
	        
               <form style={this.Form} onSubmit={this.handleSubmit}>
             
	               <label style={this.Label}>
	                 Item:
		                 <input style= {this.Input}
		                 id="content" type="text"
		                 value={this.state.content}
		                  placeholder="input Item"
		                  onChange = {this.handleChangeContent}
		                  />
	                </label>
               

			        <button style={this.Button} type="submit">Add Item</button>
			        <button style={this.Button} type="button" onClick={this.handleCancel}>Cancel</button>
			   </form>
           </div>
			)
	}
}

export default FormItem;