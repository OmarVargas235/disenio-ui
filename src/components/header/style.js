import styled from 'styled-components';

export const ContainerHeader = styled.header`
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	svg {
		fill: white;
		width: 20px;
		height: 20px;
	}

	.container-icon {
		border: 2px solid ${props => props.isDark ? 'white' : '#191919'};
		width: 30px;
		height: 30px;
		border-radius: 50%;

		svg {
			fill: ${props => props.isDark ? 'white' : '#191919'};
			width: 15px;
			height: 15px;
		}
	}

	.container-plus-red {
		background-color: #DD403D;
		width: 35px;
		height: 35px;
		border-radius: 10px;
	}

	@media (max-width: 440px) {
		h2 {
			font-size: 1.4rem;
		}

		.container-icon {
			width: 25px;
			height: 25px;
		}

		.container-plus-red {
			width: 30px;
			height: 30px;

			svg {
				width: 15px;
				height: 15px;
			}
		}
	}

	@media (max-width: 380px) {
		.container-icon {
			width: 15px !important;
			height: 15px !important;

			svg {
				width: 10px;
				height: 10px;
			}
		}
	}
`;