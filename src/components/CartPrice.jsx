import React from 'react';
import {Link} from 'react-router-dom';

const CartPrice = ({price}) =>{ 
    return(
        <div className="cart-total-pice">
                <div className="cart-cupon">
                    <h5>Have coupon?</h5>
                        <input type="text" placeholder="Coupon code"/><button>Apply</button>
                </div>
                <div className="price-total">
                    <p>Total Price: <span>$ {new Intl.NumberFormat('es').format(price.price)}</span></p>
                    <p>Discount: <span>-$ {new Intl.NumberFormat('es').format(price.price/100)}</span></p>
                    <p>Total: <span> $ {new Intl.NumberFormat('es').format(price.price - (price.price/100))}</span></p>
                    <hr/>
                     <div className="priceLink">
                        <Link to='/checkout'>Make Purchase</Link> 
                        <Link to='/'>Continue Shopping</Link>
                     </div>
                </div>
            </div>
    )
}
export default CartPrice;