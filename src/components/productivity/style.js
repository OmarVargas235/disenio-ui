import styled from 'styled-components';

export const ContainerProductivityStyle = styled.section`

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;

	img {
		border-radius: 20px;
	}

	.grid-item-4 {
		grid-column: 2 / 3;
		position: relative;
		bottom: 60%;
	}

	@media (min-width: 840px) {
		.grid-item-4 {
			bottom: 35%;

			img {
				height: 250px;
			}
		}
	}
`;