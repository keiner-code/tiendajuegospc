import React from 'react';
import CheckoutProducts from '../components/CheckoutProducts'
import CheckoutForm from '../components/CheckoutForm';
import AppContext from '../context/AppContext';

const CheckoutContainer = () =>{

     const {addtoCart} = React.useContext(AppContext);
     let priceTotal =0;
     addtoCart.Cart.map(price => priceTotal+=(price.price*price.amount));
     let desc = priceTotal / 100;
    return (
        <div className="checkout-container">
            <div className="checkout-products">
                <h2>Checkout</h2>
                {addtoCart.Cart.map(product =><CheckoutProducts key={product.id} product={product}/>)}
                <div className="checkout-total">
                    <p>Total</p>
                    <p>$ {new Intl.NumberFormat('es').format(priceTotal-desc)}</p>
                </div>
            </div>
            <CheckoutForm/>
        </div>
    )
}
export default CheckoutContainer;