import styled from 'styled-components';

export const ContainerNavbar = styled.section`
	img {
		width: 60px;
		height: 60px;
		border-radius: 8px;
	}
`;

// =====================================
// Estilos del boton toggle (dark-light)
// =====================================

export const ButtonToggle = styled.footer`
	.button-toggle {
		width: 60px;
		height: 25px;
		position: relative;
	}

	.checkbox {
		display: none;
	}

	.container-toggle__label {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #4C42CF;
		border-radius: 25% / 50%;
		cursor: pointer;
		transition: background-color .3s;
	}

	.container-toggle__label::after {
		content: '';
		display: block;
		position: absolute;
		border-radius: 50%;
		transition: left .3s;
	}

	.circle-dark {
		position: absolute;
		width: 20px;
		height: 20px;
		left: 3px;
		top: calc(50% - 10.5px);
		transition: opacity .3s, left .3s;
		background-color: white;
		border-radius: 50%;
	}

	.checkbox:checked + .container-toggle__label .circle-dark {
		left: 37px;
	}

	.checkbox:checked + .container-toggle__label {
		background-color: #4DB794;
	}

	.circle-light {
		position: absolute;
		width: 30px;
		height: 30px;
		left: 0;
		transition: opacity .3s, left .3s;
	}

	.checkbox:checked + .container-toggle__label .circle-light {
		left: 30px;
	}
`;