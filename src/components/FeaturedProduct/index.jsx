import React, {useLayoutEffect, useState} from "react";
import "./featuredProduct.css";

import Client from "shopify-buy";

const SHOPIFY_KEY = process.env.REACT_APP_API_KEY;

const client = Client.buildClient({
    domain: "itisstillgood.myshopify.com",
    storefrontAccessToken: SHOPIFY_KEY
});

const FeaturedProduct = () => {
    const [collectionData, setCollectionData] = useState([]);
    
    useLayoutEffect(() => {
        client.collection.fetchAllWithProducts().then((collections) => {
            collections.forEach((collection) => {
                if (collection.title === "Featured Products") {
                    setCollectionData(collection.products);
                }
            })
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div id="featured-product-container">
            <div className="arrow"/>
            {collectionData.length > 0 &&
                <div className="box-container">
                    <div className="box-column">
                        <img className="featured-product-image" src={collectionData[0].images[0].src} alt="product image"/>
                    </div>

                    <div className="box-column">
                        <div className="primary-product-info">
                            <h1>{collectionData[0].title}</h1>
                            <h4 dangerouslySetInnerHTML={{__html: collectionData[0].descriptionHtml}} />
                        </div>

                        <div className="secondary-product-info">
                            <a href={collectionData[0].onlineStoreUrl} target="_blank">
                                <button className="btn">BUY NOW</button>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default FeaturedProduct;
