import React from "react"
import './Math.css'
import Store from './Store'
import { Route, Link } from 'react-router-dom'

import './all.css';
import Love from "./components/Love"
import RainbowNews from "./RainbowNews"

function Math() {
    return (
        <div>
            <div >
                <h1 className="math">U.S.A</h1>
                {/* <RainbowNews word="U.S.A." />  */}
                <p className="clear"><Link to="/housing"  >Housing </Link></p>
                <p className="clear"><Link to="/sandiego"  >Local news </Link></p>
                <p className="clear"><Link to="/border" > Southern Border</Link></p>
                <p className="clear"><Link to="/policing" >Police</Link></p>
                <p className="clear"><Link to="/contact" > Contact ✉️ </Link></p>
            <Love title="U.S. public libraries provide access to computers, internet, technology training" link="https://www.gatesfoundation.org/Ideas/Media-Center/Press-Releases/2005/06/Support-Needed-for-Library-Technology" photo="./img/news/digdividebookslaptops.png" /> 
            <Love title="The Digital Divide during COVID-19: who has access, who doesn't?" link="https://www.crpe.org/thelens/digital-divide-among-students-during-covid-19-who-has-access-who-doesnt" photo="./img/news/digdividegapgreen.png" /> 
            <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1029090526&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-833101656" title="Andrea Boggs ~ abfreewrite.com" target="_blank" style="color: #cccccc; text-decoration: none;">Andrea Boggs ~ abfreewrite.com</a> · <a href="https://soundcloud.com/user-833101656/sets/covid-19" title="Covid 19" target="_blank" style="color: #cccccc; text-decoration: none;">Covid 19</a></div>
            </div>
            {/* <Store />  */}
        </div>
    )

}

export default Math;