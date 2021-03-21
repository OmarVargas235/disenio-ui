import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ContainerTimeStyle } from './style.js';
import time1 from '../../assets/img/time/time1.jpg';
import time2 from '../../assets/img/time/time2.jpg';
import time3 from '../../assets/img/time/time3.jpg';
import { AnimationCards } from '../../style';

const TimePage = ({ inProp }) => {
	
	return (
		<AnimationCards>
			<ContainerTimeStyle className="container-fluid pl-md-0">
				
				<CSSTransition in={inProp} timeout={100} classNames="first-img">
					<img src={time1} alt="time1" className="img-fluid" />
				</CSSTransition>
				
				<CSSTransition in={inProp} timeout={100} classNames="second-img">
					<img src={time2} alt="time2" className="img-fluid" />
				</CSSTransition>
				
				<CSSTransition in={inProp} timeout={100} classNames="third-img">
					<img src={time3} alt="time3" className="img-fluid" />
				</CSSTransition>
			
				<CSSTransition in={inProp} timeout={100} classNames="fourth-img">
					<div className="grid-item-4">
						<div className="box"></div>
					</div>
				</CSSTransition>
				
				<CSSTransition in={inProp} timeout={100} classNames="fifth-img">
					<div className="grid-item-5">
						<div className="box"></div>
					</div>
				</CSSTransition>

			</ContainerTimeStyle>
		</AnimationCards>
	)
}

export default TimePage;