import logo from './logo.svg';
import './App.css';
// import './index';
import Home from './Home'
import './Home.css'

import Love from './components/Love'
import Books from './Books'
import books from './components/books_list'
import './NavbarHeader.css'
// import Contact from './components/Contact';
// import Store from './Store'
import Checkout from './Checkout'
import BooksApp from './BooksApp';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import { useEffect } from 'react'
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './NavBar';
import newsData from './components/newsList';
import Search from './components/Search'
import News from './News';



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ', authUser);

      if (authUser) {
        dispatch({ 
          type: 'SET_USER', 
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // this will only run once when App comp loads 
  }, [])

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}{/*If you put header here it appears at top of every page*/}
        <Switch>
          {/* <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Search />
          </Route> */} {/* Commenting this out does not remove comps from browser */}
          <Route path="/books">
            <Navbar />
            <Books />
          </Route>
          {/* <Route path="/news">
            <Navbar />
            <News />
          </Route> */} {/*Commenting out path='news' and replacing Home comp below w news */}


          <Route path="/">
            {/* <Header /> */} {/*Commenting this out does remove Comps from browser*/}
            <Navbar />
            <News /> {/*<Home />*/} {/*Remove Home from Navbar*/}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
