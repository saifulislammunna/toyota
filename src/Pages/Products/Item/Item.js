import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product}) => {
     
    const { _id, name, price, description, img } = product;
    const url = `/products/${_id}`;
    return (
        <div className="product pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={url}>
                <button className="btn btn-warning">Buy Now</button>
            </Link>
        </div>
    );
};

export default Item;