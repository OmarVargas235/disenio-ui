import React from 'react';
import { ContainerNavbar, ButtonToggle } from './style.js';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import img from '../../assets/img/perfil/perfil2.png';
import LinkNavabar from '../../layaut/LinkNavabar';

const NavbarPage = ({ setIsActiveMenu, changeLayaut, isDark, setIsDark }) => (
	<ContainerNavbar className="align-self-center align-self-md-start">
		
		<div className="w-100 text-right d-block d-md-none">
			<Close 
				className="text-right"
				onClick={() => setIsActiveMenu(false)}
			/>
		</div>

		<header>
			<img src={img} alt="img1" className="img-fluid mb-3" />
			<p className={`mb-1 text-${isDark ? 'light' : 'dark'} font-weight-bold`}>Samantha</p>
			<p className="mb-2">correo@correo.com</p>
		</header>

		<nav className="navbar px-0 mb-4 navbar-dark">
			<ul className="navbar-nav">
				<li className="nav-item">
					<LinkNavabar 
						url='/design'
						changeLayaut={changeLayaut}
						text='Design'
						active={isDark ? 'white' : 'black'}
					/>
				</li>

				<li className="nav-item">
					<LinkNavabar 
						url='/barbeque'
						changeLayaut={changeLayaut}
						text='Barbeque'
						active={isDark ? 'white' : 'black'}
					/>
				</li>

				<li className="nav-item">
					<LinkNavabar 
						url='/productivity'
						changeLayaut={changeLayaut}
						text='Productivity'
						active={isDark ? 'white' : 'black'}
					/>
				</li>

				<li className="nav-item">
					<LinkNavabar 
						url='/book'
						changeLayaut={changeLayaut}
						text='Books'
						active={isDark ? 'white' : 'black'}
					/>
				</li>

				<li className="nav-item">
					<LinkNavabar 
						url='/time'
						changeLayaut={changeLayaut}
						text='Time'
						active={isDark ? 'white' : 'black'}
					/>
				</li>
			</ul>
		</nav>
		
		
		<ButtonToggle>
			<div className="button-toggle">
				<input type="checkbox" className="checkbox" id="button-toggle" />

				<label 
					htmlFor="button-toggle"
					className="container-toggle__label"
					onClick={() => setIsDark( !isDark )}
				>
					<div className="circle-dark"></div>
					<div className="circle-light"></div>
				</label>
			</div>
	    </ButtonToggle>
    	
	</ContainerNavbar>
)

export default NavbarPage;