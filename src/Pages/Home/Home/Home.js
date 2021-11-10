import React from 'react';
import Cars from '../../Shared/Cars/Cars/Cars';
import Footer from '../../Shared/Footer/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Reviews from '../../Shared/Reviews/Reviews/Reviews';
import Banner from '../Banner/Banner';

const Home = () => {
    
    return (
        <div>
             <Navigation></Navigation>
              <Banner></Banner>
              <Cars></Cars>
              <Reviews></Reviews>
              <Footer></Footer>
        </div>
    );
};

export default Home;