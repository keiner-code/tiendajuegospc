import { Route,BrowserRouter,Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home';
import Layout from '../containers/layout';
import UseInitialState from '../hooks/UseInitialState';
import AppContext from '../context/AppContext';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Facture from '../pages/Facture';

const App = () => {
    const initialstate = UseInitialState();
    const empty = Object.keys(initialstate).length;
    return(
      <>{empty > 0 ?
      <AppContext.Provider value={initialstate}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/facture' element={<Facture/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
      </AppContext.Provider>
      :'...Cargando'}</>
    )
  
}

export default App;
