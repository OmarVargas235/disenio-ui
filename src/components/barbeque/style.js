import styled from 'styled-components';

export const ContainerBarbequeStyle = styled.section`

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;

	img {
		height: 100%;
		width: 100%;
		border-radius: 20px;
	}

	.grid-item-2 {
		height: 80%;
	}

	.grid-item-3 {
		height: 60%;
	}

	.grid-item-4 {
		height: 140%;
	}

	.grid-item-5 {
		position: relative;
		bottom: 27%;
		height: 160%;
	}

	.grid-item-6 {
		position: relative;
		bottom: 55%;
		height: 180%;
	}

	.box {
		border-radius: 20px;
		height: 100%;
	}

	.box-3 {
		background-color: #00997B;
	}

	.box-4 {
		background-color: #15A697;
	}

	.box-5 {
		background-color: #FFBF3C;
	}

	.box-6 {
		background-color: #FAD0CC;
	}
`;