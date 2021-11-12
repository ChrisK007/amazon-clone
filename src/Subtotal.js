import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';


function Subtotal() {

    var total = 0;
    const [{cart}, dispatch] = useStateValue();

    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    

    

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
                value={total} //homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
