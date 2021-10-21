import React from "react";
import { connect } from "react-redux";
import './checkout-item.styles.scss';
import {addItem, clearItemsFromCart, removeItem} from './../../redux/cart/cart.actions';

const CheckoutItem = ( { cartItem, removeItem, addItem, clearItemsFromCart } ) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="cart-item" />
        </div>
        <span className="name"> {name} </span>
        
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}> &#10096;</div>
            <span className="value"> { quantity} </span>
            <div className="arrow" onClick={() => addItem(cartItem)}> &#10097;</div>
        </span>
        
        <span className="price"> ${price} </span>
        <div className="remove-button" onClick={()=>clearItemsFromCart(cartItem)} >&#10005;</div>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    clearItemsFromCart: cartItem => dispatch(clearItemsFromCart(cartItem))

})

export default connect(null, mapDispatchToProps)(CheckoutItem);
