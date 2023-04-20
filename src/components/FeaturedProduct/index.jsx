import React, {useLayoutEffect, useState} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
      setActiveImage((activeImage + 1) % collectionData[0].images.length);
    };
  
    const prevImage = () => {
      setActiveImage(
        (activeImage + collectionData[0].images.length - 1) %
          collectionData[0].images.length
      );
    };


    return (
        <section id="shop">

        <div id="featured-product-container">
            {collectionData.length > 0 &&
                <div className="box-container">
                    <div className="box-column">
                        <img  className="featured-product-image" src={collectionData[0].images[activeImage].src} alt="product image"/>
                        <div className="arrow-container">
                      <button className="prev-btn" onClick={prevImage}>
                        <FaChevronLeft />
                      </button>
                      <button className="next-btn" onClick={nextImage}>
                        <FaChevronRight />
                      </button>
                      </div>
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
     </section>
    );
};

export default FeaturedProduct;
