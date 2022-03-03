import React from 'react';
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';

const CheckoutForm = () =>{
   const navigate = useNavigate();
   return(
        <div className="checkout-form">
        <h2>Credit Card Details</h2>
        <Formik 
            initialValues={{cardHolder: '', dateExpiration: '',cardNumber: '', cvc: ''}} 
            validate={values => {
                const errors = {};
                if (!values.cardHolder) {
                    errors.cardHolder = 'Required';
                }
                else if (!/^[a-zA-Z]{3,20}$/i.test(values.cardHolder)){
                    errors.cardHolder = 'Invalid Card Holder address';
                }
                if (!values.dateExpiration) {
                    errors.dateExpiration = 'Required';
                }
                // dd/mm/yyyy hh:mm:ss
                else if (!/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/i.test(values.dateExpiration)){
                    errors.dateExpiration = 'Invalid Date Expiration address';
                }
                if (!values.cardNumber) {
                    errors.cardNumber = 'Required';
                }
                else if (!/^[0-9]*$/i.test(values.cardNumber)){
                    errors.cardNumber = 'Invalid Card Number';
                }
                if (!values.cvc) {
                    errors.cvc = 'Required';
                }
                else if (!/^[0-9]*$/i.test(values.cvc)){
                    errors.cvc = 'Invalid CVC';
                }
            return errors;
        }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  navigate('/facture');
                  setSubmitting(false);
                }, 400);
              }}
        >
            {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting,
         /* and other goodies */
            }) =>(
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <div className="form-item-card-holder">
                        <label>CARD HOLDER</label>
                        <input 
                            type="text" 
                            placeholder="Card Holder" 
                            name="cardHolder"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cardHolder}
                        />
                        {errors.cardHolder && touched.cardHolder && errors.cardHolder}
                    </div>
                    <div className="form-item-date">
                        <label>EXPIRATION DATE</label>
                        <span>
                            <input 
                                type="text" 
                                placeholder="YY" 
                                name="dateExpiration"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateExpiration}
                            />
                            {errors.dateExpiration && touched.dateExpiration && errors.dateExpiration}
                        </span>
                    </div>
                </div>
                
                <div className="form-item-number">
                    <div className="form-number">
                        <label htmlFor='cardNumber'>CARD NUMBER</label>
                        <input 
                            type="text"
                            placeholder="Card Numberr" 
                            name="cardNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cardNumber}
                        />
                        {errors.cardNumber && touched.cardNumber && errors.cardNumber}
                    </div>
                    <div className="form-cvc">
                        <label>CVC</label>
                        <input 
                            type="text" 
                            placeholder="CVC"
                            name="cvc"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cvc}
                        />
                        {errors.cvc && touched.cvc && errors.cvc}
                    </div>
                </div>
                <div className="form-button">
                   <button type='submit' disabled={isSubmitting}>PROCEED</button>
                </div>
            </form>
       )}
     </Formik>
    </div>
    );
}
export default CheckoutForm;