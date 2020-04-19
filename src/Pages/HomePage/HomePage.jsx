import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header/header.jsx';
import FirstPage from '../FirstPage/firstPage';
import SideComponent from '../ForthPage/LeftAgain';
import SecondPage from '../SecondPage/secondPage'
import ThirdPage from '../ThirdPage/thirdPage';
import SideeComponent from '../ForthPage/side-side';
import RightComponent from '../ForthPage/right-side';
import ThreeColumn from '../../components/ThreeColumnIntro/ThreeColumn';
import Button from 'react-bootstrap/Button';
import testimg from '../../assets/images/test.jpeg';
import airportimg from '../../assets/images/airport.PNG';
import movieimg from '../../assets/images/movie.jpg';

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
class HomePage extends React.Component{


render(){
    return(

<div>
    <Header/>
    <hr></hr>
    <FirstPage/>
   
     <SecondPage/>
     <ThirdPage/>
     <SideComponent img={testimg}/>
   <RightComponent img={airportimg}/>
   <SideeComponent img={movieimg}/>
      <Switch>
        
        <Route exact path='/Review' component={ReviewPage} />
        <Route path='/FAQ' component={FaqsPage} />
        <Route path='/Join' component={joinusPage} />
        <Route path='/Team' component={ourteamPage} />
      </Switch>
    </div>



    );
}
}
export default HomePage