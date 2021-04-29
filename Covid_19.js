import React from 'react'
import Freewrite from './components/Freewrite'
import Love from './components/Love'
import coviddata from './covidData'
import covidSlider from './components/covidSliderData'
import CovidSlider from './CovidSlider'

function Covid_19() {

const covidNews = covidSlider.map(flu => <div className="inLine"><Love key={flu.id} title={flu.title} link={flu.link} photo={flu.photo} bc={flu.bc} quote={flu.quote} /></div>); 

    return ( 
        <div>
           <h1 className="covid">Covid 19</h1>
           {covidNews} 
           
           <CovidSlider antivax={coviddata} />
           
           
        </div>
    )
}

export default Covid_19
