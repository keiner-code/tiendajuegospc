import React from 'react';

const CheckoutProducts = ({product}) =>{
    return (
        <div className="checkout-item">
            <div className="checkout-name-product">
                <h3>{product.title}</h3>
                <p>{product.short_description}</p>
            </div>
            <p>$ {new Intl.NumberFormat('es').format(product.price*product.amount)}</p>
        </div>
                
    )
}
export default CheckoutProducts;