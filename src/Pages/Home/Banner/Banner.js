import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            
             
             <div>
              <div className="carousel-part background-image">
              <div className="left-container  half-width p-5">
                     <div className="text-container">
                         <h1 className="fs-1 fw-bold banner-text  " >Your Cars, <br />
                        Best Choose.</h1>
                         {/* <h3 className="text-animation fs-1 banner-text"> <span  ref={textRef}></span></h3>
 */}
                           <Link  to="/products"><Button>Explore</Button></Link> 
                     </div>
                </div>
          
             </div>
        </div>
        </div>
    );
};


export default Banner;

  
   