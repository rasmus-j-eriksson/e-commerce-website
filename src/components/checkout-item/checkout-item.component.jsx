import React from "react";
import './checkout-item.styles.scss'

const CheckoutItem = ( { item: {name, quantity, price, imageUrl} } ) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="cart-item" />
        </div>
        <span className="name"> {name} </span>
        
        <span className="quantity">&#10096; {  quantity} &#10097;</span>
        
        <span className="price"> ${price} </span>
        <div className="remove-button">&#10005;</div>
    </div>
)

export default CheckoutItem;
