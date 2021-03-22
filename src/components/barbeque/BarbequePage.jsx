import React from 'react';
import { ContainerBarbequeStyle } from './style.js';
import barbeque1 from '../../assets/img/barbeque/barbeque1.jpg';
import barbeque2 from '../../assets/img/barbeque/barbeque2.jpg';
import Card from '../../layaut/Card';

const arrData = [
	[barbeque1, 'first-img'],
	[barbeque2, 'second-img', true],
	['box-3', 'third-img', true],
	['box-4', 'fifth-img', true],
	['box-5', 'fourth-img', true],
	[barbeque1, 'fifth-img', true],
];

const BarbequePage = () => (
	<Card
		arrData={arrData}
		ContainerStyle={ContainerBarbequeStyle}
	/>
)

export default BarbequePage;