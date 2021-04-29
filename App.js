import logo from './logo.svg';
import './App.css';
import './index';
import Home from './Home'
import './Home.css'
import Math from './Math'
import './Math.css'
import './Covid.css'
import {Route, Link} from 'react-router-dom'
import NavBar from './NavBar'
import Love from './components/Love'
import Animals from './Animals'
import Books from './Books'
import books from './components/books_list'
import './NavbarHeader.css'
import Housing from './components/sliders/homelessSlider';
import Housing4Poor from './Housing';
import Covid19 from './CovidSlider';
import CovidSlider from './CovidSlider';
import Covid_19 from './Covid_19';
import World from './sections/World'
import DogBiteLaw from './components/DogBiteLaw'
import SanDiego from './SanDiego';
import Policing from './components/Policing';
import Contact from './components/Contact';
import BorderCrisis from './Border';

function App() {
  return (
    <div className="App">
    <NavBar /> 
     <Route exact path="/" component={Home} />
     <Route exact path="/animals" component={Animals} /> 
     <Route exact path="/math" component={Math} />
     <Route exact path ="/sandiego" component={SanDiego} /> 
     <Route exact path="/housing" component={Housing4Poor} />
     <Route exact path="/border" component={BorderCrisis} /> 
     <Route exact path="/policing" component={Policing} />
     <Route exact path="/contact" component={Contact} /> 
     <Route exact path="/covid_19" component={Covid_19} /> 
     <Route exact path="/books" component={Books} />
     <Route exact path="/sections/world" component={World} /> 
      
    </div>
  );
}

export default App;
