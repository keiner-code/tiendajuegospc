import React from 'react';
import FactureTable from '../components/FactureTable';
import AppContext from '../context/AppContext';

const FactureContent = () =>{
    const {addtoCart} = React.useContext(AppContext);
    let totalprice =0;
    addtoCart.Cart.map(total => totalprice+= (total.price*total.amount));
    return(
        <div className="facture">
            <div className="factureContainer">
                <div className="factureTitle">
                    <h1>Nombre De La Empresa</h1>
                    <h2>FACTURA</h2>
                </div>
                <div className="factureData">
                    <div className="factureInfo-User">
                        <strong>factura a</strong>
                        <p><strong>jack Thomson</strong></p>
                        <p>24 Dummy Street Area</p>
                        <p>Location, Lorem Ipsum 123</p>
                        <p>5067654</p>
                    </div>
                    <div className="factureInfoFacture">
                        <span><strong>Factura</strong>2324</span>
                        <span><strong>Fecha</strong>12/12/2020</span>
                    </div>
                </div>
                <div className="factureTable">
                    <table>
                        <tr>
                            <th>item</th>
                            <th>Name Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>TOTAL</th>
                        </tr>
                            <tbody>
                                {addtoCart.Cart.map(article => <FactureTable key={article.id} article={article}/>)}
                            </tbody>
                    </table>
                   
                </div>
                <div className="factureTotal">
                    <div className="factureBusiness">
                        <p>Thank you for your bussines</p>
                    </div>
                    <div className="factureTotalItem">
                        <span><strong>SUBTOTAL</strong>{new Intl.NumberFormat('es').format(totalprice)} $</span>
                        <span><strong>TAX</strong> 0.0%</span>
                        <span><strong>TOTAL</strong>{new Intl.NumberFormat('es').format(totalprice)} $</span>
                    </div>
                </div>
                <div className="paymentsInfo">
                    <div className="paymentMethod">
                        <a href="http://">Payments info</a>
                        <p>Method of Payment: bank trasfer</p>
                        <p>Account number: xxxx-xxxx-xxxx-xx</p>
                    </div>
                        <div className="paymentConditions">
                            <a href="http://">Terms & Conditions</a>
                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default FactureContent;