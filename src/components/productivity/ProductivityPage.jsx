import React from 'react';
import { ContainerProductivityStyle } from './style.js';
import productivity1 from '../../assets/img/productivity/productivity1.jpg';
import productivity2 from '../../assets/img/productivity/productivity2.jpg';
import productivity3 from '../../assets/img/productivity/productivity3.jpg';
import productivity4 from '../../assets/img/productivity/productivity4.jpg';
import Card from '../../layaut/Card';

const arrData = [
	[productivity1, 'second-img'],
	[productivity2, 'first-img'],
	[productivity3, 'third-img'],
	[productivity4, 'fifth-img', true],
];

const ProductivityPage = () => (
	<Card
		arrData={arrData}
		ContainerStyle={ContainerProductivityStyle}
	/>
)

export default ProductivityPage;