import styled from 'styled-components';

export const ContainerBookStyle = styled.section`

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;

	img {
		border-radius: 20px;
	}

	img:nth-child(2) {
		grid-column: 2 / 4;
	}


	img:nth-child(3) {
		height: 100%;
	}

	img:nth-child(4), img:nth-child(8) {
		position: relative;
		bottom: 92%;
	}

	img:nth-child(8) {
		bottom: 110%;
	}

	@media (max-width: 767px) and (min-width: 510px) {
		img:nth-child(2) {
			height: 300px;
		}

		img:nth-child(4) {
			height: 150px;
			bottom: 65%;
		}
	}
`;