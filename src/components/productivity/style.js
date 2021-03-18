import styled from 'styled-components';

export const ContainerProductivityStyle = styled.section`

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;

	img {
		border-radius: 20px;
	}

	.grid-item-2 {
		grid-column: 2 / 4;
	}

	.grid-item-3 {
		position: relative;
		bottom: 20%;
	}

	.grid-item-4 {
		grid-column: 2 / 4;
	}
`;