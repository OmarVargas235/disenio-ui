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