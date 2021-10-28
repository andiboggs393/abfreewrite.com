import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Home.css'
import Love from './components/Love'
import Recall from "./Templates/Recall";
import recallData from "./Templates/recallData"
import './Home.css'
import Navbar from './NavBar'
import './Header.css'
import Boeing from "./components/Boeing";
import boeing737maxdata from "./components/boeing737maxdata";
import Freewrite from './components/Freewrite'
import Search from './components/Search'
import newsData from './components/newsList'
import Vax from "./components/VaxxNews";
import vaxxnews from "./components/vaccine-data";
import "./components/Search.css"
import "./components/slider.css"
import Textbox from "./components/Textbox"
import freewriteData from './components/personalWriting';
import myTextBox from './personalTextbox';
import RejectFiles from './Drafts/RejectFiles';
import './components/news.css'

function News() {
  const name="andi";
  const isMale = false;

  const [show, setShow] = useState(true)
  const [showCool, setShowCool] = useState(true)
  const [showTextBox, setShowTextBox] = useState(true)
  const [showAllNews, setShowAllNews] = useState(newsData)
  const [showRemovedLinks, setShowRemovedLinks] = useState(newsData)

  const newsGroup = newsData.map((harik, index) => <div className="inline" key={index} id="news">{index}<Love  title={harik.title} link={harik.link} photo={harik.photo} bc={harik.bc} /></div>);

  const freewrites = freewriteData.map(essay => <div className="inline" id="essay"><Freewrite key={essay.id} bold={essay.bold} date={essay.date} article={essay.article} /></div>)





  // const = () => newsAway{
    
  //   newsData.shift(newsData.length -1);
  // }

  // function newsComeBack(){
  //   newsData.unshift(newsData.length - 1);
  // }


  return (
    <div>
      {/*  */}

   
      
      <div className="blue__buttons">
        {/* <div><button onClick={() => setShow(true)}>Show News</button></div>
        <div><button onClick={() => setShow(false)}>Hide News</button></div> */}
      </div>

      <p><button onClick={() => setShow(!show)}>Toggle News </button></p>
      
      { show === true ? <button onClick={() => setShowAllNews(newsData.shift())}>Next</button>: null}
      {/* <button onClick={() => setShowRemovedLinks(newsData.unshift(newsData.length - 1))}>Make news come back</button> */}
      
      {/* {<p><button onClick={newsComeBack()}>Make news come back</button></p>} */}
      {console.log(newsData.length)}

      {show ? <header className="search"><Search /></header> : null}

      {/* the "news group" is being mapped by the Search component*/}
      {/* {newsGroup} */}

      
      <p><button onClick={() => setShowCool(!showCool)}>Toggle Freewrites </button></p>
      {/* <p><button onClick={() => setShowTextBox(!showTextBox)}>Toggle Ideas </button></p> */}

      {showCool ? <div>{freewrites}</div>: null}

{/* {showTextBox ? <div>
      <Textbox bc="Salmon" content="Vaccines are not vegan ~ they contain slaughtered monkey kidney cells." />
      <Textbox bc="DarkSlateGray" content="There is a bug in the human psyche that is very easy to exploit." />
      <Textbox bc="DarkSlateGray" smallfont="Increasing waste and incompetency at bureaucratic level + increasing greed at corporate level + increasing autism in childbirth + modern history based on lies + embezzlement by military industrial complex = America today" ptext="DarkSlateGray" bcc="Salmon" />
      </div>: null }   */}
      
      {console.log(newsData[0])}
{/* <h3>You are a { isMale ? 'male': 'female' }</h3> */}

    </div>



  )
}

export default News
