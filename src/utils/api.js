import axios from 'axios';
/*Funcion que retorna peticion axios (promesa)
para luego utilizar en el componente container*/
export function getTodos() {
	return axios.get('http://localhost:8000/api/todos');
}


