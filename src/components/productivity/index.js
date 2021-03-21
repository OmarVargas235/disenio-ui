import React, { useEffect, useContext } from 'react';
import ProductivityPage from './ProductivityPage';
import { ContextInProp } from '../../context/ContextInProp';

const Productivity = () => {

	const { inProp, setInProp } = useContext( ContextInProp );

	useEffect(() => {
		
		setInProp(true);

		return () => setInProp(false);

	}, [setInProp]);
	
	return (
		<ProductivityPage 
			inProp={inProp}
		/>
	)
}

export default Productivity;