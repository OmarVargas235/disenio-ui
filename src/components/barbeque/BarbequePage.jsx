import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ContainerBarbequeStyle } from './style.js';
import barbeque1 from '../../assets/img/barbeque/barbeque1.jpg';
import barbeque2 from '../../assets/img/barbeque/barbeque2.jpg';
import { AnimationCards } from '../../style';

const BarbequePage = ({ inProp }) => (
	<AnimationCards>
		<ContainerBarbequeStyle className="container-fluid pl-md-0">
			
			<CSSTransition in={inProp} timeout={100} classNames="first-img">
				<img src={barbeque1} alt="barbeque1" className="img-fluid" />
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="second-img">
				<div className="grid-item-2">
					<img src={barbeque2} alt="barbeque2" className="img-fluid" />
				</div>
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="third-img">
				<div className="grid-item-3">
					<div className="box box-3"></div>
				</div>
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="fifth-img">
				<div className="grid-item-4">
					<div className="box box-4"></div>
				</div>
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="fourth-img">
				<div className="grid-item-5">
					<div className="box box-5"></div>
				</div>
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="fifth-img">
				<div className="grid-item-6">
					<img src={barbeque1} alt="barbeque1" className="img-fluid" />
				</div>
			</CSSTransition>
		</ContainerBarbequeStyle>
	</AnimationCards>
)

export default BarbequePage;