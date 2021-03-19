import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerNavbar, ButtonToggle } from './style.js';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import img from '../../assets/img/perfil/perfil2.png';

const NavbarPage = ({ setIsActiveMenu }) => (
	<ContainerNavbar className="align-self-center align-self-md-start">
		
		<div className="w-100 text-right d-block d-md-none">
			<Close 
				className="text-right"
				onClick={() => setIsActiveMenu(false)}
			/>
		</div>

		<header>
			<img src={img} alt="img1" className="img-fluid mb-3" />
			<p className="mb-1 text-light font-weight-bold">Samantha</p>
			<p className="mb-2">correo@correo.com</p>
		</header>

		<nav className="navbar px-0 mb-4 navbar-dark">
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink to="/design" className="nav-link">Design</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/barbeque" className="nav-link">Barbeque</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/productivity" className="nav-link">Productivity</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/book" className="nav-link">Books</NavLink>
				</li>

				<li className="nav-item">
					<NavLink to="/time" className="nav-link">Time</NavLink>
				</li>
			</ul>
		</nav>
		
		
		<ButtonToggle>
			<div className="button-toggle">
				<input type="checkbox" className="checkbox" id="button-toggle" />

				<label htmlFor="button-toggle" className="container-toggle__label">
					<div className="circle-dark"></div>
					<div className="circle-light"></div>
				</label>
			</div>
	    </ButtonToggle>
    	
	</ContainerNavbar>
)

export default NavbarPage;