import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
	<Router>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</Router>,
	document.getElementById('root')
);
