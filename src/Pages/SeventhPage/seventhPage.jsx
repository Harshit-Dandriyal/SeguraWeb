import React from 'react';
import image from '../../assets/images/phone-map.png'
import './seventhPage.style.scss';

const SeventhPage = () => (
    <div>
    <div class="SeventhPage">    
    


      <div className="row justify-content-around">



        <div className="col-5 row justify-content-between">
          <div className="col-6">
            <div class="SevHead">Simple Price</div>
            <div class="SevText">No hidden fess</div>
            <div class="SevText">No metered timing</div>
            
          </div>
          <div className="col-4">
            <div class="SevRup">$49</div>
            <div class="SevBag">per bag/day</div>
          </div>
          <div className="col-3 SevCard">
            <div class="SeCard">
            <img class="SevCImg" src={image} alt="photo"/>
              <div className="CardText">
                Insaurance Covered
              </div>
            </div>
          </div>
          <div className="col-3 SevCard">
          <div class="SeCard">
          <img class="SevCImg" src={image} alt="photo"/>
              <div className="CardText">
                Cancelellation free and easy
              </div>


            </div>
          </div>
          <div className="col-3 SevCard">
          <div class="SeCard">
          <img class="SevCImg" src={image} alt="photo"/>
              <div className="CardText">
                Discount Storage
              </div>


            </div>
          </div>
        </div>
        <div className="col-3">
          <img class="SevImg" src={image} alt="photo"/>
        </div>
      </div>


        
    </div>
    </div>
  );
  export default SeventhPage;