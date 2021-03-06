import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import GestorMaterial from './Stock/GestorMaterial';
import Stock from './Stock/stock'
ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={App}/>
				<Route exact path="/about" component={GestorMaterial}/>
	    </Switch>
    </Router>,
    document.getElementById('root')
);