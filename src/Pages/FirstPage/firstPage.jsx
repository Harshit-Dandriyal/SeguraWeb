import React from 'react';
import './firstPage.style.scss';
import Logo from '../../assets/images/logo.png';
import ThreeColumn from '../../components/ThreeColumnIntro/ThreeColumn'

class FirstPage extends React.Component {
     constructor() {
          super();
          this.state = [
               {
                    id: 1,
                    title: "SEGURA TALENT",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quam quo quibusdam ut natus architecto",
                    

               },
               {
                    id: 2,
                    title: "SEGURA HUNT",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quam quo quibusdam ut natus architecto"
               },
               {
                    id: 3,
                    title: "SEGURA VAULT",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quam quo quibusdam ut natus architecto"
               }
          ]
     }

     render() {
          return <div class="Firstpage">
               <div class="tittle">
                    <img class="FiImage" src={Logo} alt='website logo' />
               </div>
               <div class="titledetail">
                    JOIN THE SEGURA LUGGAGE STORAGE
                   <p>
                         COMMUNITY NOW!
                   </p>
               </div>
               <div class="titlecontent">
                    EXPERIENCE SEGURA LUGGAGE STORAGE FOR BEST BETAION
               <p>
                         EVER AND I HOPE YOU WILL LOVE IT GET FREE JOBS HERE.
               </p>
               </div>
               <div className='Three'>
                    {
                         this.state.map(({ id, ...otherProps }) => {
                              return <ThreeColumn key={id} {...otherProps}/>
                         })
                    }
               </div>
          </div>
     }
}

export default FirstPage;