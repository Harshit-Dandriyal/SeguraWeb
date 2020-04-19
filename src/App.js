import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'

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
       <HomePage/>
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
