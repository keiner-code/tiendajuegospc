import axios from "axios";
import React from "react";
const products ={
    Cart: []
}
const  UseInitialState = () =>{
    const [state,SetState] = React.useState([]);
    const [addtoCart,SetAddToCard] = React.useState(products);

    const option = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {platform: 'browser', category: 'mmorpg', 'sort-by': 'release-date'},
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': '5f140f48b0msh5df4bce57bdba69p1dc7a4jsn25a2b306bcb2'
        }
    };

    const AddCart = (product) =>{
        const price = Math.floor(Math.random() * 80000 - 10000) + 10000;
        product = {
            ...product,
            price: price,
            amount: 1
        }
        SetAddToCard({
            ...addtoCart,
            Cart: [...addtoCart.Cart,product],
        });

    }
     const RemoveCart = (product) =>{
       SetAddToCard({
           ...addtoCart,
           Cart: addtoCart.Cart.filter(item => item.id != product.id),
       })
    } 
    const QuantityTotal = (Total) =>{
        addtoCart.Cart.map(item => item.id === Total.id && (item.amount = Total.amount))
        SetAddToCard({...addtoCart,Cart: [...addtoCart.Cart]});
    }
    //console.log(addtoCart);
    React.useEffect(() => {
        axios.request(option)
        .catch(error => console.log(error))
        .then(response => SetState(response.data))
    },[]);
    
    return{
        state,
        AddCart,
        addtoCart,
        RemoveCart,
        QuantityTotal,
    }
}
export default UseInitialState;
