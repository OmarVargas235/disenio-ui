import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ContainerProductivityStyle } from './style.js';
import productivity1 from '../../assets/img/productivity/productivity1.jpg';
import productivity2 from '../../assets/img/productivity/productivity2.jpg';
import productivity3 from '../../assets/img/productivity/productivity3.jpg';
import productivity4 from '../../assets/img/productivity/productivity4.jpg';
import { AnimationCards } from '../../style';

const ProductivityPage = ({ inProp }) => {
	
	return (
		<AnimationCards>
			<ContainerProductivityStyle className="container-fluid pl-md-0">
				
				<CSSTransition in={inProp} timeout={100} classNames="second-img">
					<img src={productivity1} alt="productivity1" className="img-fluid" />
				</CSSTransition>
				
				<CSSTransition in={inProp} timeout={100} classNames="first-img">
					<img src={productivity2} alt="productivity2" className="img-fluid" />
				</CSSTransition>
				
				<CSSTransition in={inProp} timeout={100} classNames="third-img">
					<div className="d-flex align-item-end">
						<img src={productivity3} alt="productivity3" className="img-fluid" />
					</div>
				</CSSTransition>
				
				<CSSTransition in={inProp} timeout={100} classNames="fourth-img">
					<div className="grid-item-4">
						<img src={productivity4} alt="productivity4" className="img-fluid" />
					</div>
				</CSSTransition>

			</ContainerProductivityStyle>
		</AnimationCards>
	)
}

export default ProductivityPage;