import React, { useEffect, useState } from "react";
import $ from "jquery";

import "../../../styles/cart-styles/cart-page.css";

const CartPage = ({data}) => {
    const [cartData, setCartData] = useState([]);
    
    // const fetchCheckOut = () => {
    //     setCartData(data);
    // }

    // const handleCheckOut = () => {
    //     window.location.assign(data.webUrl);
    // }

    // const handleCloseCart = () => {
    //     $("#cart-page").delay(100).animate({top: "100vh"}, 1000);
    // }

    // const reduceQuantity = (e) => {
    //     console.log(e)
    // }

    // const increaseQuantity = (e) => {
    //     console.log(e)
    // }

    useEffect(() => {
        // fetchCheckOut()
    });

    return (
        <>
            <div id = "products-in-cart" onClick={handleCloseCart}>
                <button id = "close-cart"> X </button>
                <div className="product-details">
                    <ul>
                        {Object.keys(cartData).length > 0 && cartData.lineItems.map((item) => {
                            return (
                                <li>
                                    <div>
                                        <p> {item.title} </p>
                                        <p> {item.attrs.variant.title}</p>
                                        <div>
                                            <p id = "item-quantity">{item.quantity}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <button onClick={handleCheckOut}>Checkout</button>
        </>
    )
}

export default CartPage;