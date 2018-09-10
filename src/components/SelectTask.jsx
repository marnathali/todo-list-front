import React, {Component} from 'react';


class SelectTask extends Component{



select={
  display: "flex",
  justifyContent: "flex-start",

  width: 200,
  padding: 3,
  borderColor: "dodgerBlue",
  borderRadius: 4,
  backgroundColor: "ghostWhite",
  color: "midnightBlue",
  margin:10
}

render(){
  const todoList = this.props.todoList;
  let opciones = todoList.map((opt) =>
  	<option key={opt.id} value={opt.id}>{opt.title}</option>
  	);


	return(
		<div >
		  <select style={this.select}  onChange={this.props.onChange}>
            {opciones}
		  </select>
		</div>
		)
}
}
export default SelectTask;