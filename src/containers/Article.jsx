import React from 'react';
import SectionArticle from '../components/SectionArticle';
import AppContext from '../context/AppContext';

const Article = () => {
    const {state} = React.useContext(AppContext);

        return(
            <article>
                <section>
                   {state.map(item => <SectionArticle key={item.id} article={item}/>)}
                </section>
            </article> 
        )
}

export default Article;