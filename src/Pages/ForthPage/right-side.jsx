import React from 'react';
import './side-side.style.scss';

const RightComponent= ({img,side,text}) => (
    <div class='row Compose'>
         <div className="col-md-3"></div>
         <div className="row col-md-3">
              
         <div className="col-md-12 photus" >nst. Quibusdam voluptatibus incidunt doloribus veritatis labore repudiandae veniam provident, ut, id optio praesentium deserunt ipsam illum dolores mollitia ea facere nisi officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident accusamus illum aspernatur illo quaerat quia esse hic cum tempora cupiditate perferendis molestias doloremque minus, cumque maiores magnam magni ducimus.
         </div>
         </div>         
         <div className="col-md-2"><img src={img} className="photu" alt="test"/></div>   
         <div className="col-md-2"></div>    
    </div>
  );
  export default RightComponent;