import React, {useLayoutEffect, useState} from "react";
import Client from "shopify-buy";
import "./full-cat.css";

const SHOPIFY_KEY = process.env.REACT_APP_API_KEY;

const client = Client.buildClient({
    domain: "itisstillgood.myshopify.com",
    storefrontAccessToken: SHOPIFY_KEY
});



const FullCatalogue = () => {
    const [productData, setProductData] = useState([]);

    useLayoutEffect(() => {
        client.product.fetchAll().then((products) => {
            setProductData(products);
            // console.log(client);
        }).catch((err) => {
            console.error(err);
        })
    }, []);

    const strTruncate = (str, length, ending) => {
        if (length == null) length = 100;
        if (ending == null) ending = "...";

        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    }
    
    return (
        <>
            <div id="full-catalogue-container">
                <div className="products-container">
                    {productData.length > 0 &&
                        productData.map((product) => {
                            return (
                                <div className="product-card">
                                    <a href={product.onlineStoreUrl} target="_blank">
                                        <img className="product-image" src={product.images[0].src} />
                                    </a>
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-description">{strTruncate(product.description, 200)}</p>
                                    <a href={product.onlineStoreUrl} target="_blank">
                                        <button> BUY NOW </button>
                                    </a>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>  
        </>
    )
}

export default FullCatalogue;