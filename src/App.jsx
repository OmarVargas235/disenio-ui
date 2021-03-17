import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/bootstrap.min.css';
import Navbar from './components/navbar/';
import Header from './components/header/';
import Design from './components/design/';
import Barbeque from './components/barbeque/';

const GlobalStyle = styled.section`
	background-color: #101010;
	overflow: hidden;
	border-radius: 14px;
	width: 100%;
	max-height: 90vh;

	p, a {
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
					<div className="col-4 d-flex justify-content-center">
						<Navbar />
					</div>
				
					<div className="col-8 d-flex flex-column align-items-center justify-content-center">
						<Header />
						
						<Switch>
							<Route exact path="/design" component={ Design } />
							<Route exact path="/barbeque" component={ Barbeque } />

							<Redirect from="/" to="/design" />
						</Switch>
					</div>
				</GlobalStyle>
			</Router>
		</div>
	)
}

export default App;

							// <Route exact path="/productivity" component={ Productivity } />
							// <Route exact path="/books" component={ Books } />
							// <Route exact path="/time" component={ Time } />