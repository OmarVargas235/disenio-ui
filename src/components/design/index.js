import React, { useEffect, useContext } from 'react';
import DesignPage from './DesignPage';
import { ContextInProp } from '../../context/ContextInProp';

const Design = () => {

	const { inProp, setInProp } = useContext( ContextInProp );

	useEffect(() => {
		
		setInProp(true);

		return () => setInProp(false);

	}, [setInProp]);
	
	return (
		<DesignPage 
			inProp={inProp}
		/>
	)
}

export default Design;