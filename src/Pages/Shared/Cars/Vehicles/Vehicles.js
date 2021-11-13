import React, { useEffect, useState } from 'react';
import Vehicle from '../Vehicle/Vehicle';
import './Vehicles.css';
const Vehicles = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://fierce-sands-31991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)));
    }, [])

    return (
        <div className="products">
            <h2 className="  mt-0 fs-1 fw-bolder p-5">Our Excellent Products</h2>
            <div className="product-container">
                {
                    products.map(product => <Vehicle
                        key={product._id}
                        product={product}
                    ></Vehicle>)
                }
            </div>
        </div>
    );
};

export default Vehicles;