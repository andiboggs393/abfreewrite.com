import React from 'react'
import unhousedData from './components/homeless'
import polData from './components/polData'
import Police from './components/Police'
import Housing from './components/sliders/homelessSlider'


function Housing4Poor() {

    return (
        <div className="housing">
            <h1>Housing</h1>
            <Housing card={unhousedData} />
            <a href="https://www.sdhc.org/housing-opportunities/single-room-occupancy-units/"><img src="./img/news/srounitsz.png"/></a>
            {/* {candies (3, 9)} */}
          
        </div>
    )
}

export default Housing4Poor


