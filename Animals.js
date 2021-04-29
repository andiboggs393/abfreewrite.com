import React from "react"
import './Animals.css'
import {Route, Link} from 'react-router-dom'
import Love from './components/Love'
import Textbox from './components/Textbox'
import './all.css'

import animalsData from "./animalsData"

function Animals() {

    const k9 = animalsData.map( dogz => <div className="inLine"><Love key={dogz.key} title={dogz.title} link={dogz.link} photo={dogz.photo} quote={dogz.quote} bc={dogz.bc}/> 
        </div>)

    return (
        <div>

            <h1 className="animals">Animals</h1>
            
            
            {k9}
        </div>
    )

}

export default Animals;