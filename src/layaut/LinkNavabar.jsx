import React from 'react';

const LinkNavabar = ({ url, changeLayaut, text }) => (
	<span 
		onClick={() => changeLayaut(url)}
		className="nav-link"
		style={{
			cursor: 'pointer', 
			color: window.location.pathname === url && 'white'
		}}
	>{text}</span>
)

export default LinkNavabar;