import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import {getCartTotal} from './reducer';
import {useStateValue} from './StateProvider';


function Subtotal() {
    
    const [{cart}, dispatch] = useStateValue();
    console.log(getCartTotal(cart));

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getCartTotal(cart)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
