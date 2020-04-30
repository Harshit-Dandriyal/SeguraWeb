import React from 'react';

import Header from '../../components/Header/header.jsx';
import FirstPage from '../FirstPage/firstPage';
import SecondPage from '../SecondPage/secondPage'
import ThirdPage from '../ThirdPage/thirdPage';
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
     
     <ThirdPage/>
     
     
     <FifthPage/>
   <SixthPage/>
   <SeventhPage/>
   <EighthPage/>
   <LastPage/>
    </div>



    );
}
}
export default HomePage