import React from 'react';
import { ContainerBookStyle } from './style.js';
import books1 from '../../assets/img/books/books1.jpg';
import books2 from '../../assets/img/books/books2.jpg';
import books3 from '../../assets/img/books/books3.jpg';
import books4 from '../../assets/img/books/books4.jpg';
import books5 from '../../assets/img/books/books5.jpg';
import books6 from '../../assets/img/books/books6.jpg';
import books7 from '../../assets/img/books/books7.jpg';
import books8 from '../../assets/img/books/books8.jpg';

const BookPage = () => {
	
	return (
		<ContainerBookStyle className="container-fluid">
			
			<img src={books1} alt="books1" className="img-fluid" />
			<img src={books2} alt="books2" className="img-fluid" />
			<img src={books3} alt="books3" className="img-fluid" />
			<img src={books4} alt="books4" className="img-fluid" />
			<img src={books5} alt="books5" className="img-fluid" />
			<img src={books6} alt="books6" className="img-fluid" />
			<img src={books7} alt="books7" className="img-fluid" />
			<img src={books8} alt="books8" className="img-fluid" />

		</ContainerBookStyle>
	)
}

export default BookPage;