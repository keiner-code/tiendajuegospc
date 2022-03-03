import React from 'react';
import AppContext from '../context/AppContext';
import CartPrice from '../components/CartPrice';
import CartItem from '../components/CartItem';

const CartContainer = () =>{
    let totalPrice=0;
    let cont=0;
    const {addtoCart} = React.useContext(AppContext);
    console.log(addtoCart);
    return(
        <div className="cart">
            <div className="cart-container-item">
                {addtoCart.Cart.map(item => <CartItem key={item.id} product={item}/>)}
            </div>
            {addtoCart.Cart.map(price =>{ totalPrice += price.price*price.amount; cont++})}
            {cont === addtoCart.Cart.length && <CartPrice price={{price:  totalPrice }}/>}
                
        </div>
    )
}
export default CartContainer;