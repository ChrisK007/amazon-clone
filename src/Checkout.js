import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [ {cart}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="" className="checkout__ad"/>


                <div>
                    <h2 className="checkout__title">
                        Your shopping Cart
                    </h2>

                    
                    {cart.map(item => (
                        
                        <CheckoutProduct
                            id={item.id}
                            image = {item.image}
                            title = {item.title}
                            price = {item.price}
                            rating = {item.rating}
                        />
                        
                    ))}
               
                </div>
            </div>



            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
