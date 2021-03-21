import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'animate.css';
import './assets/bootstrap.min.css';
import Navbar from './components/navbar/';
import Header from './components/header/';
import Design from './components/design/';
import Barbeque from './components/barbeque/';
import Productivity from './components/productivity/';
import Book from './components/book/';
import Time from './components/time/';
import { GlobalStyle, ContainerNav } from './style';
import { ReactComponent as Btn } from './assets/icons/btn-toggle.svg';
import ContextInPropProvider from './context/ContextInProp';

const App = () => {
	
	const layautRef = useRef();

	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [leftPosition, setLeftPosition] = useState(0);

	useEffect(() => {
		
		// Hace que el left que se le aplica al menu en el responsi sea dinamico.
		setLeftPosition(layautRef.current.getBoundingClientRect().left);

		function resizeMedia() {
			
			setLeftPosition(layautRef.current.getBoundingClientRect().left);
		}
		
		window.addEventListener('resize', resizeMedia);

		return () => window.removeEventListener('resize', resizeMedia);
		
	}, []);

	return (
		<div className="container d-flex justify-content-center" ref={layautRef}>
			<Router>
				<GlobalStyle className="row no-gutters">
					<ContextInPropProvider>
						<ContainerNav 
							className="col-md-4 d-flex justify-content-center mt-md-5 pt-md-5" 
							isActiveMenu={isActiveMenu}
							leftPosition={leftPosition}
						>
							<Navbar 
								isActiveMenu={isActiveMenu}
								setIsActiveMenu={setIsActiveMenu}
							/>
						</ContainerNav>
						
						<Btn 
							className="d-block d-md-none btn"
							onClick={() => setIsActiveMenu(true)}
						/>

						<div className="col-12 col-md-8 d-flex flex-column justify-content-center pt-5">
							<Header />
							
							<ul className="nav my-4 d-flex justify-content-center justify-content-md-start">
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
					</ContextInPropProvider>
				</GlobalStyle>
			</Router>
		</div>
	)
}

export default App;