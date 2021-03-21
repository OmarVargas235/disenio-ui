import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ContainerBookStyle } from './style.js';
import books1 from '../../assets/img/books/books1.jpg';
import books2 from '../../assets/img/books/books2.jpg';
import books3 from '../../assets/img/books/books3.jpg';
import books4 from '../../assets/img/books/books4.jpg';
import books5 from '../../assets/img/books/books5.jpg';
import books6 from '../../assets/img/books/books6.jpg';
import books7 from '../../assets/img/books/books7.jpg';
import books8 from '../../assets/img/books/books8.jpg';
import { AnimationCards } from '../../style';

const BookPage = ({ inProp }) => (
	<AnimationCards>
		<ContainerBookStyle className="container-fluid pl-md-0">
			
			<CSSTransition in={inProp} timeout={100} classNames="second-img">
				<img src={books1} alt="books1" className="img-fluid" />
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="first-img">
				<img src={books2} alt="books2" className="img-fluid" />
			</CSSTransition>
			
			<CSSTransition in={inProp} timeout={100} classNames="third-img">
				<img src={books3} alt="books3" className="img-fluid" />
			</CSSTransition>

			<CSSTransition in={inProp} timeout={100} classNames="third-img">
				<img src={books4} alt="books4" className="img-fluid" />
			</CSSTransition>

			<CSSTransition in={inProp} timeout={100} classNames="first-img">
				<img src={books5} alt="books5" className="img-fluid" />
			</CSSTransition>

			<CSSTransition in={inProp} timeout={100} classNames="third-img">
				<img src={books6} alt="books6" className="img-fluid" />
			</CSSTransition>

			<CSSTransition in={inProp} timeout={100} classNames="fifth-img">
				<img src={books7} alt="books7" className="img-fluid" />
			</CSSTransition>

			<CSSTransition in={inProp} timeout={100} classNames="fourth-img">
				<img src={books8} alt="books8" className="img-fluid" />
			</CSSTransition>

		</ContainerBookStyle>
	</AnimationCards>
)

export default BookPage;