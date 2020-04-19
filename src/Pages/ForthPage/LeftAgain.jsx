import React from 'react';
import './side-side.style.scss';

const LeftComponent= ({img,side,text}) => (
    <div className={`${side} row Compoo`}>    
         <div className="col-md-1"></div>
         <div className="col-md-2"><img src={img} className="photu" alt="test"/></div>
         <div className="col-md-3">
         <div className="row photus">
            
         <div className='side col-md-12 ' >fghdgdfg nst. Quibusdam voluptatibus incidunt doloribus veritatis labore repudiandae veniam provident, ut, id optio praesentium deserunt ipsam illum dolores mollitia ea facere nisi officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident accusamus illum aspernatur illo quaerat quia esse hic cum tempora cupiditate perferendis molestias doloremque minus, cumque maiores magnam magni ducimus.
         </div>
         </div>
         
         <div className="col-md-5"></div>
    </div>
   
    </div>
  );
  export default LeftComponent;