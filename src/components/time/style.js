import styled from 'styled-components';

export const ContainerTimeStyle = styled.section`

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;

	img, .box {
		border-radius: 20px;
	}

	.box-1 {
		background-color: #F4CEC6;
		height: 100%;
	}

	.box-2 {
		background-color: #DADDE5;
		height: 100%;
	}

	.grid-item-3 {
		grid-column: 4 / 5;
		grid-row: 1 / 4;
	}

	.grid-item-4 {
		grid-column: 1 / 4;
		height: 100px;
	}
`;