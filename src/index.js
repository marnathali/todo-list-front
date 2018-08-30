//DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
// STYLES
import './style/index.css';
//COMPONENTS

import TodoListRoutes from './routes/routes.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	
	<Router>
	  <TodoListRoutes />
	</Router>, 

	document.getElementById('root'));

registerServiceWorker();
