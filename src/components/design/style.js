import styled from 'styled-components';

export const ContainerDesignStyle = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;

	.box, img {
		border-radius: 10px;
	}

	.img-1 {
		grid-column: 1 / 3;
	}

	.box-1 {
		background-color: #D8DFDF;
		grid-column: 3 / 4;
		grid-row: 1 / 7;
		height: 100%;
	}

	.img-3 {
		grid-row: 2 / 8;
		height: 100%;
	}

	.box-4 {
		background-color: #FFBF3C;
		grid-column: 2 / 3;
		grid-row: 2 / 8;
	}

	.img-5 {
		transform: translateY(150px);
	}
`;