import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
 
import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fierce-sands-31991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="products">
            <h2 className="text-primary mt-5">Our products</h2>
            <div className="product-container">
                {
                    products.map(product => <Item 
                        key={product._id}
                        product={product}
                    ></Item  >)
                }
            </div>
        </div>
    );
};

export default Items;