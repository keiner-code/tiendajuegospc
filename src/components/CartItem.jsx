import React from 'react';
import AppContext from '../context/AppContext';

const CartItem = ({product}) => {
    const {RemoveCart,QuantityTotal} = React.useContext(AppContext);
    const [price,setPrice] = React.useState({desc: 2});

    const HandlerAmount = (event) => {
        setPrice({desc: product.amount*0.4*10})
        QuantityTotal({amount: event.target.value,desc: price.desc, id: product.id})
    };
    const HandlerRemove = (product) => RemoveCart(product);
    
    return(
        <>
        <div className="cart-Item">
                    <div className="cart-description-item">
                        <div className="cart-image-item">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="cart-description">
                            <h3>{product.title}</h3>
                            <p>GENERO: {product.genre}</p>
                            <p>PUBLISHER: {product.publisher}</p>
                        </div>
                    </div>
                    <div className="cart-price-item">
                        <input type="number" value={product.amount} onInput={HandlerAmount} />
                        <div className="cart-price">
                            <strong>$ {new Intl.NumberFormat('es').format(product.price*product.amount)}</strong>
                            <p>$ {Math.trunc(price.desc)}% desc</p>
                        </div>
                    </div>
                    <div className="cart-remove-item">
                        <button><i className="fas fa-heart"></i></button>
                        <button onClick={()=>HandlerRemove(product)}>Remove</button>
                    </div>
                </div>
    </>
    )
}
export default CartItem;