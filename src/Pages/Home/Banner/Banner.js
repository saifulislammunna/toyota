import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { init } from 'ityped';

import './Banner.css';
const Banner = () => {

    const textRef = useRef();
    useEffect(() => {

        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 70,
             strings: ['  Best Cars .']
        })
    })
    return (
        <div>
            
             
             <div className="banner">
              <div className="background-image">
              <div className="left-container  half-width ">
                     <div className="text-container">
                         <h1 className="fs-1 fw-bold text-white " >Once You Drive One, <br />
                       You'll never stop.</h1>
                         <h3 className="text-animation fs-1 text-white"> <span  ref={textRef}></span></h3>
  
                           <Link  to="/products"><Button>Explore</Button></Link> 
                     </div>
                </div>
          
             </div>
        </div>
        </div>
    );
};


export default Banner;

  
   