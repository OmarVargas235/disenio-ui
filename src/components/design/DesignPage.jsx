import React from 'react';
import disign1 from '../../assets/img/design/disign1.png';
import disign3 from '../../assets/img/design/disign3.png';
import disign5 from '../../assets/img/design/disign5.png';
import { ContainerDesignStyle } from './style.js';

const DesignPage = () => {
	
	return (
		<ContainerDesignStyle className="container-fluid pl-md-0">
			<img className="img-fluid" src={disign1} alt="disign-1" />

			<div className="box box-1"></div>
			
			<img className="img-fluid" src={disign3} alt="disign-3" />

			<div className="box box-4"></div>

			<img className="img-fluid" src={disign5} alt="disign-5" />
		</ContainerDesignStyle>
	)
}

export default DesignPage;