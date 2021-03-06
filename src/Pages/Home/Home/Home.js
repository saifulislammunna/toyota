import React from 'react';
import Cars from '../../Shared/Cars/Cars/Cars';
import Connect from '../../Shared/Connect/Connect';
import Footer from '../../Shared/Footer/Footer/Footer';
import HomeReviews from '../../Shared/HomeReviews/HomeReviews/HomeReviews';
 
import Navigation from '../../Shared/Navigation/Navigation';
 
import Banner from '../Banner/Banner';

const Home = () => {
    
    return (
        <div>
             <Navigation></Navigation>
              <Banner></Banner>
              <Cars></Cars>
              <HomeReviews></HomeReviews> 
              <Connect></Connect>
              <Footer></Footer>
        </div>
    );
};

export default Home;