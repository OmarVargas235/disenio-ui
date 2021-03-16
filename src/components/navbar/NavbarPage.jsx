import React from 'react';
import { ContainerNavbar, ButtonToggle } from './style.js';
import img from '../../assets/img/perfil/perfil2.png';

const NavbarPage = () => (
	<ContainerNavbar>
		<header>
			<img src={img} alt="img1" className="img-fluid mb-3" />
			<p className="mb-1 text-light font-weight-bold">Samantha</p>
			<p>correo@correo.com</p>
		</header>

		<nav className="navbar px-0 mb-5 navbar-dark">
			<ul className="navbar-nav">
				<li className="nav-item active">
					<a href="/" className="nav-link">Design</a>
				</li>

				<li className="nav-item">
					<a href="/" className="nav-link">Barbeque</a>
				</li>

				<li className="nav-item">
					<a href="/" className="nav-link">Productivity</a>
				</li>

				<li className="nav-item">
					<a href="/" className="nav-link">Workout</a>
				</li>

				<li className="nav-item">
					<a href="/" className="nav-link">Books</a>
				</li>

				<li className="nav-item">
					<a href="/" className="nav-link">Time</a>
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