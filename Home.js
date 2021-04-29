import React from "react"
import ReactDOM from 'react-dom';
import './Home.css'
import Love from './components/Love'
import newsData from './components/newsList'
import Paywall from "./Paywall";
import Textbox from "./components/Textbox";
import Clock from "./components/Clock"
import './components/clock.css'
import EddSlider from './components/EddSlider'
import RPlaw from "./components/RevengePornLaw";
import edd from "./components/edd";
import rplawData from "./components/rplawData";
import Freewrite from './components/Freewrite'
import Luriddetails from "./components/Lurid";
import pixsmall from "./data/smallpics";





// const kelp = document.getElementById("app2")
// const oyster = document.getElementById("app3")
// const seaotter = document.getElementById("app4")

// ReactDOM.render(
//   <div>

//     <Love title="San Diego's $4.6 billion budget only allocates $10m to help 'homeless'" link="https://www.10news.com/news/local-news/san-diego-mayor-todd-gloria-details-10-million-in-budget-plan-to-help-citys-homeless" photo="./img/news/tgloriaz10mforhomelss.png" quote="Gloria's proposed investments include: $1.35 million to expand substance use disorder treatment programs and add about 65 new short-term detoxification beds, $6.3 million to add up to 300 interim shelter beds at new sites to get more people off the streets, $1 million to expand the People Assisting the Homeless Coordinated Street Outreach Program, which uses a person-centered, neighborhood-based approach to cultivating trusting relationships with unsheltered residents and connecting them to housing and services, $1 million to expand rapid-rehousing programs to serve an additional 100 households, including rental assistance and case management, $300,000 to expand workforce training programs needed to bring more people into a career in providing homelessness services, such as the Homelessness Program for Engaged Educational Resources course, a collaboration between the San Diego Housing Commission and San Diego City College, establishment of a homelessness Strategies and Solutions Department and a national search for a director to lead it. In addition to the director, the new department would include three new senior-level positions" />
//     {/* { title: "San Diego's $4.6 billion budget only allocates $10m to help 'homeless'", link: "https://www.10news.com/news/local-news/san-diego-mayor-todd-gloria-details-10-million-in-budget-plan-to-help-citys-homeless", photo: "./img/news/tgloriaz10mforhomelss.png", quote:"Gloria's proposed investments include: $1.35 million to expand substance use disorder treatment programs and add about 65 new short-term detoxification beds, $6.3 million to add up to 300 interim shelter beds at new sites to get more people off the streets, $1 million to expand the People Assisting the Homeless Coordinated Street Outreach Program, which uses a person-centered, neighborhood-based approach to cultivating trusting relationships with unsheltered residents and connecting them to housing and services, $1 million to expand rapid-rehousing programs to serve an additional 100 households, including rental assistance and case management, $300,000 to expand workforce training programs needed to bring more people into a career in providing homelessness services, such as the Homelessness Program for Engaged Educational Resources course, a collaboration between the San Diego Housing Commission and San Diego City College, establishment of a homelessness Strategies and Solutions Department and a national search for a director to lead it. In addition to the director, the new department would include three new senior-level positions" }, */}

//   </div>,
//   kelp);


// ReactDOM.render(
//   <div>
//     <Luriddetails small={pixsmall} />
//     {/* <Love title="Mayor's budget plan proposes to close San Diego's world class downtown library on Sundays, Mondays" link="https://www.sandiegouniontribune.com/news/politics/story/2021-04-17/proposed-san-diego-library-cuts-come-with-tradeoffs-that-boost-access-during-closed-hours" photo="./img/news/libraryz.png" /> */}
//     {/* { title: "Mayor's budget plan proposes to close San Diego's world class downtown library on Sundays, Mondays", link: "https://www.sandiegouniontribune.com/news/politics/story/2021-04-17/proposed-san-diego-library-cuts-come-with-tradeoffs-that-boost-access-during-closed-hours", photo: "./img/news/libraryz.png" }, */}
//   </div>,
//   oyster);


// ReactDOM.render(
//   <div>

//     {/* <Love title="Battenfeld: Kamala Harris, accidental immigration czar, whiffs on answers to crisis" link="https://www.bostonherald.com/2021/04/25/battenfeld-kamala-harris-accidental-immigration-czar-whiffs-on-answers-to-crisis/" photo="./img/news/kamalacloseup.png" /> */}
    
//     <Paywall />
//     <Clock />
//     {/* { photo: "./img/news/migrants-scaling-wallz.png" }, */}
//     <Love photo="./img/news/migrants-scaling-wallz.png" />
//   </div>
//   ,
//   seaotter);

function Home() {

  const newsGroup = newsData.map(harik => <div className="inLine"><Love key={harik.id} title={harik.title} link={harik.link} photo={harik.photo} bc={harik.bc} quote={harik.quote} /></div>);

  return (
    <div>

      <h1 className="home">News</h1>
      
      
      {/* <EddSlider gold={edd}/> */}
      {/* <RPlaw code={rplawData} />  */}
      {newsGroup}
      <Paywall /> 
      <Freewrite article="Inside of every human being, lives a fragment of God. That means if you harm another human being, you are harming God. This is the much needed understanding of 'why' behind the 1st Commandment, 'Thou Shalt Not Kill'"/> 
      {/* <App5/> */}
      
    </div>

  )

}

export default Home;