import React from 'react';
import { ContainerTimeStyle } from './style.js';
import time1 from '../../assets/img/time/time1.jpg';
import time2 from '../../assets/img/time/time2.jpg';
import time3 from '../../assets/img/time/time3.jpg';
import Card from '../../layaut/Card';

const arrData = [
	[time1, 'first-img'],
	[time2, 'second-img'],
	[time3, 'third-img'],
	['box-1', 'fourth-img', true],
	['box-2', 'fifth-img', true],
];

const TimePage = () => (
	<Card
		arrData={arrData}
		ContainerStyle={ContainerTimeStyle}
	/>
)

export default TimePage;