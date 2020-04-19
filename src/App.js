import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import Header from './components/Header/header.jsx';
import FirstPage from './Pages/FirstPage/firstPage';
import thirdPage from './Pages/ThirdPage/thirdPage';
import SideComponent from './Pages/ForthPage/LeftAgain';
import SideeComponent from './Pages/ForthPage/side-side';
import RightComponent from './Pages/ForthPage/right-side';
import ThreeColumn from './components/ThreeColumnIntro/ThreeColumn';
import Button from 'react-bootstrap/Button';
import testimg from './assets/images/test.jpeg';
import airportimg from './assets/images/airport.PNG';
import movieimg from './assets/images/movie.jpg';

  const ReviewPage = () => (
    <h1>ReviewPage</h1>
  );

const FaqsPage = () => (
  <h1>FaqsPage</h1>
);
const joinusPage = () => (
  <h1>joinusPage</h1>
);
const ourteamPage = () => (
  <h1>ourteamPage</h1>
);
var c='Black';



function App() {
  
  return (
    
    
     
      

     <div>
       <Switch>
        
        <Route exact path='/Review' component={HomePage} />
        <Route path='/FAQ' component={FirstPage} />
        <Route path='/Join' component={joinusPage} />
        <Route path='/Team' component={ourteamPage} />
      </Switch>
      
      
    </div>
  );
}

export default App;
