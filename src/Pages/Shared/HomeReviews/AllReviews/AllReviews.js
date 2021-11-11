import React, { useEffect, useState } from 'react';
import SingleReviews from '../SingleReviews/SingleReviews';
 
import './AllReviews.css';
const AllReviews = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fierce-sands-31991.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)));
    }, [])

    return (
        <div id="products">
             
            <div className="product-container">
                {
                    products.map(product => <SingleReviews
                        key={product._id}
                        product={product}
                    ></SingleReviews>)
                }
            </div>
        </div>
    );
};

export default  AllReviews;