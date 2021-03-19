import React from 'react';
import { ContainerBarbequeStyle } from './style.js';
import barbeque1 from '../../assets/img/barbeque/barbeque1.jpg';
import barbeque2 from '../../assets/img/barbeque/barbeque2.jpg';

const BarbequePage = () => {
	
	return (
		<ContainerBarbequeStyle className="container-fluid pl-md-0">
			
			<img src={barbeque1} alt="barbeque1" className="img-fluid" />

			<div className="grid-item-2">
				<img src={barbeque2} alt="barbeque2" className="img-fluid" />
			</div>

			<div className="grid-item-3">
				<div className="box box-3"></div>
			</div>

			<div className="grid-item-4">
				<div className="box box-4"></div>
			</div>

			<div className="grid-item-5">
				<div className="box box-5"></div>
			</div>

			<div className="grid-item-6">
				<img src={barbeque1} alt="barbeque1" className="img-fluid" />
			</div>
		</ContainerBarbequeStyle>
	)
}

export default BarbequePage;