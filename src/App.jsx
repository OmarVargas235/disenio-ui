import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/bootstrap.min.css';
import Navbar from './components/navbar/';
import Header from './components/header/';
import Design from './components/design/';
import Barbeque from './components/barbeque/';
import Productivity from './components/productivity/';
import Book from './components/book/';
import Time from './components/time/';

const GlobalStyle = styled.section`
	background-color: #101010;
	overflow: hidden;
	border-radius: 14px;
	width: 100%;
	height: 90vh;

	p, a, li {
		color: #4B4A4A;
	}

	@media (min-width: 992px) {
		width: 70%;
	}
`;

const App = () => {

	return (
		<div className="container d-flex justify-content-center">
			<Router>
				<GlobalStyle className="row no-gutters pt-5">
					<div className="col-4 d-flex justify-content-center pt-5">
						<Navbar />
					</div>
				
					<div className="col-8 d-flex flex-column justify-content-center">
						<Header />
						
						<ul className="nav my-4">
							<li className="nav-item mr-4 text-light">All</li>
							<li className="nav-item mr-4">Videos</li>
							<li className="nav-item mr-4">Notes</li>
							<li className="nav-item mr-4">Music</li>
							<li className="nav-item">To-do-list</li>
						</ul>

						<Switch>
							<Route exact path="/design" component={ Design } />
							<Route exact path="/barbeque" component={ Barbeque } />
							<Route exact path="/productivity" component={ Productivity } />
							<Route exact path="/book" component={ Book } />
							<Route exact path="/time" component={ Time } />

							<Redirect from="/" to="/design" />
						</Switch>
					</div>
				</GlobalStyle>
			</Router>
		</div>
	)
}

export default App;