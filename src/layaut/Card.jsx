import React, { useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AnimationCards } from '../style';
import { ContextInProp } from '../context/ContextInProp';

const Card = ({ arrData, ContainerStyle }) => {

	const { inProp, setInProp } = useContext( ContextInProp );

	useEffect(() => {
		
		setInProp(true);

		return () => setInProp(false);

	}, [setInProp]);

	return (
		<AnimationCards>
			<ContainerStyle className="container-fluid pl-md-0">
				{
					arrData.map((img, i) => (
						(/box/).test(img)
							? <CSSTransition 
								key={i} in={inProp} 
								timeout={100} 
								classNames={img[1]}
							>
								{
									img[2] 
										? <div className={`grid-item-${i}`}>
											<div key={i} className={`box ${img[0]}`}></div>
										</div>
										: <div key={i} className={`box ${img[0]}`}></div>
								}
							</CSSTransition>
							: <CSSTransition 
								key={i} in={inProp} 
								timeout={100} 
								classNames={img[1]}
							>
								{
									img[2] 
										? 
										<div className={`grid-item-${i}`}>
											<img 
												key={i} 
												src={img[0]} 
												alt={`barbeque-${i+1}`}
												className="img-fluid" 
											/>
										</div>
										: <img key={i} src={img[0]} alt={`barbeque-${i+1}`}
												className="img-fluid" />
								}
							</CSSTransition>
					))
				}
			</ContainerStyle>
		</AnimationCards>
	)
}

export default Card;