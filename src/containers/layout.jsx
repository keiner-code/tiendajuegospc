import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

class Layout extends React.Component{
    constructor({children}){
        super();
        this.children = children;
    }
    
    render(){
        return(
            <>
                <Header/>
                <Navbar/>
                {this.children}
                <Footer/>

            </>
        )
    }
}

export default Layout;