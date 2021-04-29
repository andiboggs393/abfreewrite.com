import React, { useState } from 'react'
import Love from './components/Love'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './components/slider.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import recall from './components/recall'
import immigrationPlanData from './components/immigrationPlanData'

const Immigration = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length; 

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0: current + 1);
	};

	console.log(current)

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);

	}

	if (!Array.isArray(slides) || slides.length <= 0){
		return null; 
	}


	return (
			<section className="slider">
			<ArrowBackIcon className="left__arrow" onClick={prevSlide} />
			<ArrowForwardIcon className="right__arrow" onClick={nextSlide} /> 
			{immigrationPlanData.map((slide,index) =>{
				return(
						<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current &&(<Love bc={slide.bc} title={slide.title} link={slide.link} photo={slide.photo} />)}
						</div> 
					)
			})}
			</section>
		);

}; 

export default Immigration 
 