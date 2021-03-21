import React from 'react';
import { CSSTransition } from 'react-transition-group';
import disign1 from '../../assets/img/design/disign1.png';
import disign3 from '../../assets/img/design/disign3.png';
import disign5 from '../../assets/img/design/disign5.png';
import { ContainerDesignStyle } from './style.js';
import { AnimationCards } from '../../style';

const DesignPage = ({ inProp }) => (

	<AnimationCards>
		<ContainerDesignStyle className="container-fluid pl-md-0">

			<CSSTransition in={inProp} timeout={100} classNames="first-img">
				<img className="img-fluid img-1" src={disign1} alt="disign-1" />
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="second-img">
				<div className="box box-1"></div>
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="third-img">
				<img className="img-fluid img-3" src={disign3} alt="disign-2" />
			</CSSTransition>

			<CSSTransition in={inProp} timeout={100} classNames="third-img">
				<div className="box box-4"></div>
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="fifth-img">
				<img className="img-fluid img-5" src={disign5} alt="disign-3" />
			</CSSTransition>
			
		</ContainerDesignStyle>
	</AnimationCards>
)

export default DesignPage;