import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <nav>
                    <ul>
                        <li><button><i className="fas fa-search"></i></button></li>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/cart'>CART</Link></li>
                        <li><Link to='/checkout'>CHECKOUT</Link></li>
                        <li><Link to='/facture'>FACTURE</Link></li>
                        <li><a href="http://">NEWSLETTER</a></li>
                    </ul>
                    <ul>
                        <li><a href="http://"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="http://"><i className="fab fa-facebook"></i></a></li>
                         <li><a href="http://"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="http://"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </nav>
             </div>
        )
    }
}
export default Navbar;