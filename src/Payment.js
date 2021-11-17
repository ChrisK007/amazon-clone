import React, {useState, useEffect} from 'react';
import './Payment.css';
import { Link, useHistory} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Order from "./Order";
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from "./reducer";
import axios from "./axios";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {db, doc, setDoc} from './firebase';

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true); 
    const [clientSecret, setClientSecret] = useState(true); 
    const [succeeded, setSuceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() =>{
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {

            console.log(getCartTotal(cart));
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits (dollars in cents)
                url: `/payments/create?total=${Math.round(getCartTotal(cart) * 100)}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [cart]);

    console.log("THE SECRET IS >>>>", clientSecret);

    const handleSubmit = async event => {
        // stripe function
        event.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(async ({paymentIntent}) => {

            const paymentRef = doc(db, "users", user.uid, "orders", paymentIntent.id)


            await setDoc(paymentRef, {
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
              });

            setSuceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_CART'
            });

            history.replace('/orders');
        });

    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

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

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                    
                                    decimalScale={2}
                                    value={getCartTotal(cart)} 
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing...</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Payment;