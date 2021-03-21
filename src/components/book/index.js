import React, { useEffect, useContext } from 'react';
import BookPage from './BookPage';
import { ContextInProp } from '../../context/ContextInProp';

const Book = () => {

	const { inProp, setInProp } = useContext( ContextInProp );

	useEffect(() => {
		
		setInProp(true);

		return () => setInProp(false);

	}, [setInProp]);
	
	return (
		<BookPage 
			inProp={inProp}
		/>
	)
}

export default Book;