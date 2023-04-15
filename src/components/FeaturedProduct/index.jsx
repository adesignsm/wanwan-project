import React, {useLayoutEffect, useState, useRef, Suspense} from "react";
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
const [index, setIndex] = useState(1);

useLayoutEffect(() => {

    client.product.fetchAll().then((products) => {
        setCollectionData(products);
        console.log(products);
    }).catch((err) => {
        console.error(err);
    })
}, []);

const checkNumber = (number) => {
    if (number > collectionData.length -1 ) {
        return 0;
    }
    if (number < 0) {
        return collectionData.length - 1;
    }
    return number;
}

const nextProduct = () => {
    setIndex(()=>{
        let newIndex = index + 1;
        return checkNumber(newIndex);
    })
};

const prevProduct = () => {
    setIndex(() => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
    })
}

const currentProduct = collectionData[index] || {};

    return(
   
 <section id="shop">

        <div id="featured-product-container">
            <h1>Featured Product</h1>
          {collectionData.length > 0 && (
            <div className="box-container">
              <div className="box-column">
                <img
                  className="featured-product-image"
                  src={currentProduct.images?.[0]?.src}
                  alt="product image"
                />
              </div>
  
              <div className="box-column">
                <div className="primary-product-info">
                  <h1>{currentProduct.title}</h1>
                  <h4
                    dangerouslySetInnerHTML={{
                        __html: currentProduct.descriptionHtml,
                    }}
                  />
                </div>
  
                <div className="secondary-product-info">
                  <a
                    href={currentProduct.onlineStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">BUY NOW</button>
                  </a>
                </div>
              </div>
            </div>
          )}
                    <div className="arrow-container">
                      <button className="prev-btn" onClick={prevProduct}>
                        <FaChevronLeft />
                      </button>
                      <button className="next-btn" onClick={nextProduct}>
                        <FaChevronRight />
                      </button>
                      </div>
        </div>
      </section>
                  
    );
};


export default FeaturedProduct;
