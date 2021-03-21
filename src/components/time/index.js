import React, { useEffect, useContext } from 'react';
import TimePage from './TimePage';
import { ContextInProp } from '../../context/ContextInProp';

const Time = () => {

	const { inProp, setInProp } = useContext( ContextInProp );

	useEffect(() => {
		
		setInProp(true);

		return () => setInProp(false);

	}, [setInProp]);
	
	return (
		<TimePage 
			inProp={inProp}
		/>
	)
}

export default Time;