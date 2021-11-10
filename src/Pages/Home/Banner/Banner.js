import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <h1>This is Banner</h1>
             <Link  to="/products"><Button>Explore</Button></Link>
        </div>
    );
};

export default Banner;