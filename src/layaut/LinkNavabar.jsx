import React from 'react';

const LinkNavabar = ({ url, changeLayaut, text, active }) => (
	<span 
		onClick={() => changeLayaut(url)}
		className="nav-link"
		style={{
			cursor: 'pointer', 
			color: window.location.pathname === url && active
		}}
	>{text}</span>
)

export default LinkNavabar;