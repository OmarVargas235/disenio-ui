import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import NavbarPage from './NavbarPage';
import { ContextInProp } from '../../context/ContextInProp';

const Navbar = ({ history, setIsActiveMenu }) => {

	const { setInProp } = useContext( ContextInProp );

	const changeLayaut = url => {
		
		if (window.location.pathname === url) return;

		setInProp(false);
		setTimeout(() => history.replace(url), 500);
	}
	
	return (
		<NavbarPage 
			setIsActiveMenu={setIsActiveMenu}
			changeLayaut={changeLayaut}
		/>
	)
}

export default withRouter(Navbar);