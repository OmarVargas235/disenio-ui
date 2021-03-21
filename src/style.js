import styled from 'styled-components';

export const GlobalStyle = styled.section`
	background-color: #101010;
	overflow: hidden;
	border-radius: 14px;
	width: 100%;
	height: 90vh;

	p, a, li {
		color: #4B4A4A;
	}

	.btn {
		fill: white;
		position: absolute;
		z-index: 1;
	}

	@media (min-height: 700px) {
		height: 80vh;
	}

	@media (min-height: 920px) {
		height: 70vh;
	}

	@media (min-height: 1000px) {
		height: 60vh;
	}

	@media (min-width: 992px) {
		width: 70%;
	}

	@media (max-width: 355px) {
		ul {
			font-size: .8rem;
		}
	}
`;

export const ContainerNav = styled.section`
	@media (max-width: 767px) {
		position: absolute;
		background-color: #191919;
		z-index: 2;
		height: 90vh;
		border-top-left-radius: 14px;
		border-bottom-left-radius: 14px;
		width: 30%;
		
		${props => (`
			left: ${props.isActiveMenu ? `${props.leftPosition + 17}px` : '-100%'};
		`)}
	}

	@media (max-width: 600px) {
		width: 40%;
	}

	@media (max-width: 440px) {
		width: 50%;
	}

	@media (max-width: 350px) {
		width: 60%;
	}
`;

export const AnimationCards = styled.div`
	
	// =====================================
	// animacion de entrada
	// =====================================

	.first-img-enter, .second-img-enter, .third-img-enter, .fourth-img-enter, .fifth-img-enter {
		opacity: 0;
		transform: translateY(60px);
	}

	.first-img-enter-done, .second-img-enter-done, .third-img-enter-done, .fourth-img-enter-done {
		${() => animationEnter(1, 0, 0)}
	}

	.second-img-enter-active, .third-img-enter-active {
		${() => animationEnter(.5, 30, 0)}
	}

	// =====================================
	// animacion de salida
	// =====================================

	.second-img-exit, .third-img-exit, .fifth-img-exit {
		${() => animationOut(1, 0)}
	}

	.second-img-exit-active, .third-img-exit-active {
		${() => animationOut(.5, 30)}
	}

	.second-img-exit-done, .third-img-exit-done {
		${() => animationOut(0, 60)}
	}

	// =====================================
	// animacion uno
	// =====================================

	.first-img-enter {
		transform: translateY(40px);
	}

	.fourth-img-enter {
		transform: translateY(180px);
	}

	.first-img-enter-active {
		${() => animationEnter(.5, 10, 0)}
	}

	.first-img-exit {
		${() => animationOut(1, 0, 0)}
	}

	.first-img-exit-active {
		${() => animationOut(.5, 20, 0)}
	}

	.first-img-exit-done {
		${() => animationOut(0, 40, 0)}
	}

	// =====================================
	// animacion cuatro
	// =====================================

	.fourth-img-enter-active {
		${() => animationEnter(.5, 100, 0)}
	}

	.fourth-img-exit {
		${() => animationOut(1, 0, .2)}
	}

	.fourth-img-exit-active{
		${() => animationOut(.5, 80)}
	}

	.fourth-img-exit-done {
		${() => animationOut(0, 160)}
	}

	// =====================================
	// animacion de la quinta imagen
	// =====================================

	.fifth-img-enter-active {
		${() => animationEnter(.5, 80, .1)}
	}

	.fifth-img-enter-done {
		${() => animationEnter(1, 0, .1)}
	}

	.fifth-img-exit-active{
		${() => animationOut(.5, 75)}
	}

	.fifth-img-exit-done {
		${() => animationOut(0, 150)}
	}
`;

const animationEnter = (opacity, translate, delay) => (`
	opacity: ${opacity};
	transform: translateY(${translate}px);
	transition: opacity .3s ${delay}s ease-in, transform .3s ${delay}s ease-in;
`);

const animationOut = (opacity, translate) => (`
	opacity: ${opacity};
	transform: translateY(${translate}px);
	transition: opacity .3s ease-in, transform .3s ease-in;
`);