import React from 'react';
import { ContainerProductivityStyle } from './style.js';
import productivity1 from '../../assets/img/productivity/productivity1.jpg';
import productivity2 from '../../assets/img/productivity/productivity2.jpg';
import productivity3 from '../../assets/img/productivity/productivity3.jpg';
import productivity4 from '../../assets/img/productivity/productivity4.jpg';

const ProductivityPage = () => {
	
	return (
		<ContainerProductivityStyle className="container-fluid">
			
			<div className="grid-item-1">
				<img src={productivity1} alt="productivity1" className="img-fluid" />
			</div>

			<div className="grid-item-2 text-center">
				<img src={productivity2} alt="productivity2" className="img-fluid" />
			</div>

			<div className="grid-item-3 d-flex align-item-end">
				<img src={productivity3} alt="productivity3" className="img-fluid" />
			</div>

			<div className="grid-item-4">
				<img src={productivity4} alt="productivity4" className="img-fluid" />
			</div>

		</ContainerProductivityStyle>
	)
}

export default ProductivityPage;