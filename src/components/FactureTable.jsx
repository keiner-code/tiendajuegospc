import React from 'react';

const FactureTable = ({article}) =>{
    return(
        <tr>
            <td>{article.id}</td>
            <td>{article.title}</td>
            <td>{new Intl.NumberFormat('es').format(article.price)}</td>
            <td>{article.amount}</td>
            <td>{new Intl.NumberFormat('es').format(article.price*article.amount)}</td>
        </tr>
    )
}
export default FactureTable;