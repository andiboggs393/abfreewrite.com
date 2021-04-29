import React, { useState } from 'react'
import Love from './components/Love'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './components/slider.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import coviddata from './covidData'; 
import covidSlider from './components/covidSliderData'

const CovidSlider = ({ antivax }) => {
    const [current, setCurrent] = useState(0);
    const length = antivax.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0: current + 1);
    };
    console.log(current)

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); 
    }

    if (!Array.isArray(antivax) || antivax.length <= 0){
        return null; 
    }

    return (
        <section className='slider'>
            <ArrowBackIcon className="left__arrow" onClick={prevSlide}/> 
            <ArrowForwardIcon className="right__arrow" onClick={nextSlide} /> 
            {coviddata.map((molecule, index) => {

                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current &&(<Love bc={molecule.bc} title={molecule.title} link={molecule.link} photo={molecule.photo} quote={molecule.quote} />)}
                        
                    </div>
                ) 
            })}
            
            
        </section>
    );
};

export default CovidSlider
