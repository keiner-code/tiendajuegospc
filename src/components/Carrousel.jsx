import React from 'react';
import carousel from '../assets/image/carousel.jpeg';

class Carrousel extends React.Component{

    render(){
        return(
            <div className="carrousel-Container">
            <div className="carrousel-menu">
                <div className="carrousel">
                    <img src={carousel} alt="" />
        
                    <div className="description-position">
                        <div className="description-Carrousel">
                            <h2>Microsoft compra Activision Blizzard y se queda con 
                                'World of Warcraft' y 'Call of Duty' por más de 60.000 
                                millones de euros
                            </h2>
                            <div className="subtitle-carrousel">
                                <p>¡Bombazo el que acaba de anunciar Microsoft!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carrousel-footer">
    
                    <div className="carrousel-footer-item">
                        <img src={carousel} alt=""/>
                        <div className="carrousel-footer-description">
                            <h2>Microsoft quiere ser la Disney del videojuego: la compra 
                                de Activision es otro paso para la conquista del sector con 
                                Game Pass
                            </h2>
                        </div>
                    </div>
    
                    <div className="carrousel-footer-item">
                        <img src={carousel} alt=""/>
                        <div className="carrousel-footer-description">
                            <h2>Microsoft quiere ser la Disney del videojuego: la compra 
                                de Activision es otro paso para la conquista del sector con 
                                Game Pass
                            </h2>
                        </div>
                    </div>
    
                    <div className="carrousel-footer-item">
                        <img src={carousel} alt=""/>
                        <div className="carrousel-footer-description">
                            <h2>Microsoft quiere ser la Disney del videojuego: la compra 
                                de Activision es otro paso para la conquista del sector con 
                                Game Pass
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        )
    }
}

export default Carrousel;