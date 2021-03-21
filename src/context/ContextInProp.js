import React, { useState, createContext } from 'react';

export const ContextInProp = createContext();

const ContextInPropProvider = ({ children }) => {

	const [inProp, setInProp] = useState(false);
	
	return (
		<ContextInProp.Provider value={{
			inProp,
			setInProp,
		}}>
			{ children }
		</ContextInProp.Provider>
	)
}

export default ContextInPropProvider;