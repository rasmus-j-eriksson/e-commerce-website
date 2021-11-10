import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JuJbMGCROoPUrLE3YXxUqy7p2mVzMB4yeRHuomrr1GHRDWXWBJ8e5dWD0TXYY1yNtlZrAwbEwmoFlDFC78VZ3oS00KhD6qk6J'

const onToken = token => {
    console.log(token);
    alert('Payment succesful')
}

    return (
        <StripeCheckout
        label='Pay now'
        name='CRWM Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        panelLabel="Pay "
        token={onToken}
        stripeKey={publishableKey}
        amount={priceForStripe}
    />
    )
};

export default StripeCheckoutButton;