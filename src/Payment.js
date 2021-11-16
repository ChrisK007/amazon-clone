import React from 'react';
import './Payment.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
    const [{cart, user, dispatch}] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{cart?.length} items</Link>)
                </h1>
                {/*Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/*Payment section - review item */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                
                    <div className="payment__items">
                        {cart.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />    
                        ))} 
                    </div>
                </div>

                {/*Payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*Stripe */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Payment;