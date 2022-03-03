import React from 'react';

const SectionItem = ({data}) => {
    return(
        <div className="article-description">
                        <h2>{data.short_description}</h2>
                    <div className="article-aplications">
                    <a href="http://">APLICACIONES</a>
                        <p>{data.title}</p>
                        <p>{data.publisher}</p>
                    </div>
                        <div className="article-image">
                        <img src={data.thumbnail} alt={data.title}/>
                        </div>
                        <div className="cartItem">
                            <div className="cart-item-button">
                                <button>Agregar Al Carrito</button> <label><i className="fal fa-shopping-cart"></i></label>
                            </div>
                            <div className="cart-item-button">
                                <button>Mu Gusta</button> <label>0 <i className="fas fa-thumbs-up"></i></label>
                            </div>
                            <div className="cart-item-button">
                                <button>No Me Gusta</button> <label>0 <i className="far fa-thumbs-down"></i></label>
                            </div>
                        </div>
                    </div>
    )
}
export default SectionItem;