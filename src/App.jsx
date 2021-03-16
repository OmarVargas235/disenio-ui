import React from 'react';
import styled from 'styled-components';
import './assets/bootstrap.min.css';
import Navbar from './components/navbar/';
import Header from './components/header/';

const GlobalStyle = styled.section`
	background-color: #101010;
	border-radius: 14px;

	p, a {
		color: #4B4A4A;
	}

	@media (min-width: 992px) {
		width: 70%;
	}
`;

const App = () => {

	return (
		<div className="container">
			<GlobalStyle className="row no-gutters py-5">
				<div className="col-4 d-flex justify-content-center">
					<Navbar />
				</div>
			
				<div className="col-8 d-flex justify-content-center">
					<Header />
				</div>
			</GlobalStyle>
		</div>
	)
}

export default App;