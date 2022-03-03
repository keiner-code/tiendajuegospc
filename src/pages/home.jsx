import React from "react";
import Article from "../containers/Article";
import Carrousel from "../components/Carrousel";
import Section from "../containers/section";

class Home extends React.Component{
   
    render(){
        return(
        <>
            <Carrousel/>
            <Article/>
            <Section/>
        </>
        )
    }
}
export default Home;