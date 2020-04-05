import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import FirstPage from './Pages/firstpage/FirstPage';
import SideComponent from './Pages/secondpage/RightAgain';
import SideeComponent from './Pages/secondpage/side-side';
import RightComponent from './Pages/secondpage/right-side';
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
const c='Black';

function App() {
  
  return (
    
    <div>

      <Header />
      <hr></hr>
    
      <FirstPage/>
      <ThreeColumn/>
      <hr></hr>
      
      <SideComponent img={testimg}/>
      <RightComponent img={airportimg}/>
      <SideeComponent img={movieimg} side={c}/>
      
     
      <Switch>
        
        <Route exact path='/Review' component={ReviewPage} />
        <Route path='/FAQ' component={FaqsPage} />
        <Route path='/Join' component={joinusPage} />
        <Route path='/Team' component={ourteamPage} />
      </Switch>
    </div>
  );
}

export default App;
