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
import Card from '../../layaut/Card';

const arrData = [
	[books1, 'second-img'],
	[books2, 'first-img'],
	[books3, 'third-img'],
	[books4, 'third-img'],
	[books5, 'first-img'],
	[books6, 'third-img'],
	[books7, 'fifth-img'],
	[books8, 'fourth-img'],
];

const BookPage = () => (
	<Card
		arrData={arrData}
		ContainerStyle={ContainerBookStyle}
	/>
)

export default BookPage;