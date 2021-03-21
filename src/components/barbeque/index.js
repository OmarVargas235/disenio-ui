import React, { useEffect, useContext } from 'react';
import BarbequePage from './BarbequePage';
import { ContextInProp } from '../../context/ContextInProp';

const Barbeque = () => {

	const { inProp, setInProp } = useContext( ContextInProp );

	useEffect(() => {
		
		setInProp(true);

		return () => setInProp(false);

	}, [setInProp]);
	
	return (
		<BarbequePage 
			inProp={inProp}
		/>
	)
}

export default Barbeque;