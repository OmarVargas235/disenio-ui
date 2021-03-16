import React from 'react';
import img1 from '../../assets/img/perfil/perfil1.jpg';
import img2 from '../../assets/img/perfil/perfil3.png';
import img3 from '../../assets/img/perfil/perfil4.jpg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ContainerHeader } from './style.js';

const HeaderPage = () => (
	
	<ContainerHeader className="d-flex">
		<h2 className="text-light mr-4">Design</h2>

		<div className="d-flex mr-5">
			<img src={img1} alt="img1" className="img-fluid" />
			<img src={img2} alt="img2" className="img-fluid" />
			<img src={img3} alt="img3" className="img-fluid" />

			<span className="container-icon d-flex justify-content-center align-items-center ml-3">
				<Plus />
			</span>
		</div>

		<div className="container-plus-red d-flex justify-content-center align-items-center">
			<Plus />
		</div>
	</ContainerHeader>
)

export default HeaderPage;