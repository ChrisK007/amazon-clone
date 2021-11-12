import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue();
    
    const removeFromCart = () => {
        //remove the item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating,
            }
        })
    };
    
    return (
        <div className="checkoutProduct">
            <img  src={image} className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
