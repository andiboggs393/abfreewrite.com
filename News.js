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
import { SkipPreviousOutlined } from '@material-ui/icons';

function News() {

  const [show, setShow] = useState(true)
  const [showCool, setShowCool] = useState(true)
  const [showTextBox, setShowTextBox] = useState(true)
  const [showAllNews, setShowAllNews] = useState(newsData)
  const [previous, setPrevious] = useState([], newsData)

  const newsGroup = newsData.map((harik, index) => <div className="inline" key={index}>{index}<Love id={index.id} title={harik.title} link={harik.link} photo={harik.photo} bc={harik.bc} /></div>);


  const freewrites = freewriteData.map(essay => <div className="inline" id="essay"><Freewrite key={essay.id} bold={essay.bold} date={essay.date} article={essay.article} /></div>)



  function next() {
    setShowAllNews(newsData.shift(previous.push(previous.unshift())))
    
   
    console.log("Previous length is" + previous.length + " newsData length : " + newsData.length)
  }

  function last() {
  


  //  setShowAllNews(newsData.reverse(previous.pop()))
  //this does not add love component it just reverses the order of the state 

    setShowAllNews(newsData.unshift(previous.pop()))
    
    //adds love component ut not with the props passed down 
  }


  


  return (
    <div>
      {/*  */}


      <p><button onClick={() => setShow(!show)}>Toggle News </button></p>


      <button onClick={() => console.log("Previous length is" + previous.length + " " + previous)}>Previous</button>

      {previous != 0 ? <button onClick={()=> last()} >Last</button> : null}


      {/* { show === true ? <button onClick={() => setShowAllNews(newsData.shift(previous.push(previous.unshift())))}>Next</button>: null} */}
      {show === true ? <button onClick={() => next()}>Next</button> : console.log("NULL") + null}
      {/*snippet works to put index in previous array but does not put the properties of the objects */}





      {show ? <header className="search"><Search /></header> : null}

      {/* the "news group" is being mapped by the Search component*/}
      {/* {newsGroup} */}


      <p><button onClick={() => setShowCool(!showCool)}>Toggle Freewrites </button></p>
      {/* <p><button onClick={() => setShowTextBox(!showTextBox)}>Toggle Ideas </button></p> */}

      {showCool ? <div>{freewrites}</div> : null}

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
