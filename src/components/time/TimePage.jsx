import React from 'react';
import { ContainerTimeStyle } from './style.js';
import time1 from '../../assets/img/time/time1.jpg';
import time2 from '../../assets/img/time/time2.jpg';
import time3 from '../../assets/img/time/time3.jpg';

const TimePage = () => {
	
	return (
		<ContainerTimeStyle className="container-fluid pl-md-0">
			
			<img src={time1} alt="time1" className="img-fluid" />
			<img src={time2} alt="time2" className="img-fluid" />
			<img src={time3} alt="time3" className="img-fluid" />

			<div className="grid-item-4">
				<div className="box"></div>
			</div>

			<div className="grid-item-5">
				<div className="box"></div>
			</div>

		</ContainerTimeStyle>
	)
}

export default TimePage;