import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import CartPage from "../../CartPage/CartPage";

const SHOPIFY_KEY = process.env.REACT_APP_API_KEY;

const client = Client.buildClient({
    domain: "itisstillgood.myshopify.com",
    storefrontAccessToken: SHOPIFY_KEY
});

const Products = () => {
    const [collectionData, setCollectionData] = useState([]);
    const [lineItemID, setLineItemID] = useState("");
    const [checkOutID, setCheckOutID] = useState("");
    const [finalCheckout, setFinalCheckout] = useState([]);

    //initialize the checkout cart
    const createCheckOut = () => {
        client.checkout.create().then((checkout) => {
            setCheckOutID(checkout.id)
        }).catch((err) => {
            console.log(err);
        })
    }

    //initialize the collection
    const fetchCollection = async () => {
        const response = await client.collection.fetchAllWithProducts();
        for (let i = 0; i < response.length; i++) {
            if (response[i].handle === "valentines-day-mugs") setCollectionData(response[i].products)
        }
    }

    //checks for the innerhtml and matches it with its corresponding product image
    const handleStyleChange = (e) => {
        collectionData[0].variants.forEach((variant) => {
            if (e.target.innerHTML === variant.title) {
                document.querySelector(".product-image").src = variant.image.src;
                setLineItemID(variant.id);
            }
        })
    }

    //updates finalCheckout state to have the lastest line items
    const handleAddToCart = () => {
        const lineItemsToAdd = [{
            variantId: lineItemID,
            quantity: 1
        }];

        client.checkout.addLineItems(checkOutID, lineItemsToAdd).then((checkout) => {
            setFinalCheckout(checkout);
            document.getElementById("validation-text").innerHTML = "Cart updated!";
            document.getElementById("validation-text").style.display = "block";
        }).catch(() => {
            document.getElementById("validation-text").style.display = "block";
        })
    }

    //gets the latest updated checkout url
    const handleCheckout = () => {
        window.location.assign(finalCheckout.webUrl)
    }

    useEffect(() => {
        fetchCollection();
        createCheckOut();
    }, []);

    return (
        <>
            {collectionData.length >= 1 && <div id = "product-container">
                <div className = "container">
                    <h2> {collectionData[0].title} </h2>
                    <div className = "product-images-container">
                        <img className="product-image" src={collectionData[0].variants[0].image.src} />
                    </div>
                    <div className="product-details">
                        <div className="description">
                            <h3> Product description </h3>
                            <div dangerouslySetInnerHTML={ {__html: collectionData[0].descriptionHtml}} />
                        </div>
                        <p> ${collectionData[0].variants[0].price.amount}0 </p>
                        <div className="product-styles-toggle">
                            <h3> Select a style </h3>
                            <div className="styles-container">
                                {collectionData[0].options[0].values.map((style) => {
                                    return (
                                        <button className="style-button" onClick={(e) => handleStyleChange(e)}>{style.value}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="product-and-booking-information">
                        <h3> How it works </h3>
                        <ul>
                            <li>A handmade WanWan Ceramics mug will be available for you to customize at the pottery studio</li>
                            <li>Put your own handwritten message or paint to decorate your mug</li>
                            <li>All tools including underglazes and glaze pencils will be provided for you upon arrival at the studio</li>
                            <li>Pices will need to be fired after decorating - Final product will need to be picked up approximately 1 -2 weeks after firing</li>
                            <li>Tiffany will be there to instruct and help with everything!</li>
                        </ul>
                        <ul>
                            <li><strong>You will be directed to book a time slot during checkout</strong></li>
                            <li><strong>Studio is located at 11 Fairburn Drive Unit 1. (Right accross from First Markham Place)</strong></li>
                        </ul>
                    </div>
                    <div className="product-function-buttons">
                        <p id = "validation-text" style={{display: "none"}}> Please select a style </p>
                        <button id="add-to-cart-button" onClick={() => {handleAddToCart()}}> Add to cart </button>
                        <button id="go-to-checkout" onClick={() => {handleCheckout()}}> Checkout </button>
                    </div>
                </div>
            </div>}
            <div id = "cart-page" style={{display: "none"}}><CartPage data={finalCheckout} /></div>
        </>
    )
}

export default Products;