import React from 'react';
import AppContext from '../context/AppContext';

const SectionArticle = ({article}) =>{
    const {AddCart} = React.useContext(AppContext);

    const handlerClck = (product) =>{
        AddCart(product);
    }
    return(
        <div className="section-article">
                        <div className="section-image">
                            <img src={article.thumbnail} alt={article.title}/>
                        </div>
                        <div className="sectionTitle">
                            <h1>{article.title}</h1>
                        </div>
                        <div className="section-description">
                            <a href="http://">ANALISIS</a>
                            <p>{article.short_description}</p>
                            <div className="section-cart">
                            <button 
                                onClick={() => handlerClck(article)}
                            ><i className="fas fa-shopping-cart"></i></button>
                            <p>Ventas 0</p>
                            </div>
                        </div>
                        <div className="section-Data">
                            <p>{article.publisher} {article.release_date}</p>
                        </div>
                        <hr/>
                    </div>
    )
}
export default SectionArticle;