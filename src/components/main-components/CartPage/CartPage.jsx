import React, { useEffect, useState } from "react";

const CartPage = ({data}) => {
    const [cartData, setCartData] = useState([]);
    
    const fetchCheckOut = () => {
        setCartData(data);
        console.log(Object.keys(cartData).length)
    }

    const handleCheckOut = () => {
        window.location.assign(data.webUrl);
    }

    useEffect(() => {
        fetchCheckOut()
    });

    return (
        <>
            <div id = "products-in-cart">
                <div className="product-details">
                    <ul>
                        {Object.keys(cartData).length > 0 && cartData.lineItems.map((item) => {
                            return (
                                <li>
                                    <div>
                                        <p> {item.title} </p>
                                        <p> {item.quantity}</p>
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