import React from 'react';
import logo from '../assets/image/logo.png';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const {addtoCart} = React.useContext(AppContext);
        return(
            <header>
                <div className="header-container">
                    <div className="menu-header">
                        <button><i className="fas fa-bars"></i></button>
                        <label>MENU</label>
                    </div>
                    <div className="img-header">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="new-header">
                        <Link to='/cart'><i className="fas fa-shopping-cart"></i></Link>
                        <p>{addtoCart.Cart.length}</p>
                    </div>
                </div>
            </header>
        )
      }

export default Header;