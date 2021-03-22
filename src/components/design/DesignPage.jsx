import React from 'react';
import disign1 from '../../assets/img/design/disign1.png';
import disign3 from '../../assets/img/design/disign3.png';
import disign5 from '../../assets/img/design/disign5.png';
import { ContainerDesignStyle } from './style.js';
import Card from '../../layaut/Card';

const arrData = [
	[disign1, 'first-img'],
	['box-1', 'second-img'],
	[disign3, 'third-img'],
	['box-4', 'third-img'],
	[disign5, 'fifth-img'],
];

const DesignPage = () => (
	<Card
		arrData={arrData}
		ContainerStyle={ContainerDesignStyle}
	/>
)

export default DesignPage;