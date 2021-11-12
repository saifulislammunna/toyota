import React from 'react';
import AllReviews from '../AllReviews/AllReviews';

const HomeReviews = () => {
    return (
        <div className="reviews">
            <h1 className="p-5 fs-1 review  fw-bolder"> Review</h1>
              <AllReviews></AllReviews>
        </div>
    );
};

export default HomeReviews;