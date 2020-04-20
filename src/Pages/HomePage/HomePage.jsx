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
import FifthPage from '../FifthPage/fifthPage';
import SixthPage from '../SixthPage/sixthPage';
import SeventhPage from '../SeventhPage/seventhPage';
import EighthPage from '../EighthPage/eighthPage';
import LastPage from '../LastPage/lastPage';

class HomePage extends React.Component{


render(){
    return(

<div>

    <Header/>
    <hr></hr>
    <FirstPage/>
   
     <SecondPage/>
     <FifthPage/>
     <ThirdPage/>
     
   
   <SixthPage/>
   <SeventhPage/>
   <EighthPage/>
   <LastPage/>
    </div>



    );
}
}
export default HomePage