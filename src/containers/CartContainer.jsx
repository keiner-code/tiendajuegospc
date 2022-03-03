import React from 'react';
import AppContext from '../context/AppContext';
import CartPrice from '../components/CartPrice';
import CartItem from '../components/CartItem';

const CartContainer = () =>{
    let totalPrice=0;
    let cont=0;
    const {addCart} = React.useContext(AppContext);
    console.log(addCart);
    return(
        <div className="cart">
            <div className="cart-container-item">
                {addCart.map(item => item.hasOwnProperty(0) && <CartItem key={item.id} product={item}/>)}
            </div>
            {/* {addtoCart.Cart.map(price =>{ totalPrice += price.price*price.amount; cont++})}
            {cont === addtoCart.Cart.length && <CartPrice price={{price:  totalPrice }}/>} */}
                
        </div>
    )
}
export default CartContainer;