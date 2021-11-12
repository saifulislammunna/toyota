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
        <div className="products">
            <h2 className="p-5   ">Our Excellent products</h2>
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