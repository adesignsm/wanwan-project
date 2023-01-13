import React, { useEffect, useState } from "react";
import Client from "shopify-buy";

const SHOPIFY_KEY = process.env.REACT_APP_API_KEY;

const client = Client.buildClient({
    domain: "itisstillgood.myshopify.com",
    storefrontAccessToken: SHOPIFY_KEY
});

const Products = () => {
    const [collectionData, setCollectionData] = useState([]);
    const [productImages, setProductImages] = useState([]);

    const fetchCollection = () => {
        client.collection.fetchAllWithProducts().then((data) => {
            Object.keys(data).forEach((i) => {
                if (data[i].title === "Valentines Day Mugs")  {
                    setCollectionData(data[i].products);
                    Object.keys(collectionData)?.flatMap((j) => {setProductImages(collectionData[j].images)})
                }
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchCollection();
    }, []);

    return (
        <>
            {Object.keys(collectionData).map((collection) => {
                // console.log(collectionData[collection])
                return (
                    <div id = "product-card-container">
                        <div className="images-container">
                        </div>
                        <div className="product-information-container">
                            <h1> {collectionData[collection].title} </h1>
                            <div dangerouslySetInnerHTML={ {__html: collectionData[collection].descriptionHtml} } />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Products;