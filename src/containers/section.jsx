import React from 'react';
import SectionItem from '../components/SectionItem';
import AppContext from '../context/AppContext';

const Section = () => {
    
    const {state} = React.useContext(AppContext);

        return(
            <div className='Section-container'>
                <div className="article-item">
                     {state.map(item => item.id < 300 && <SectionItem key={item.id} data={item}/>)}
                </div> 
            </div> 
        )
}

export default Section;