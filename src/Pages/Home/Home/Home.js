import React from 'react';
import Cars from '../../Shared/Cars/Cars/Cars';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    
    return (
        <div>
             <Navigation></Navigation>
              <Banner></Banner>
              <Cars></Cars>
        </div>
    );
};

export default Home;