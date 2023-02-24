import React from "react";
import "./featuredProduct.css";
import product_logo from "../../assets/main-assets/left_side_content.svg";

const FeaturedProduct = () => {

    return (
        <div id="featured-product-container">
            <div className="box-container">
                <div className="box-column">
                    <img src={product_logo} alt="product image"/>
                </div>

                <div className="box-column">
                    <div className="primary-product-info">
                        <h1>Product title</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sit commodi magnam debitis? 
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Nobis asperiores dicta modi.
                        </h4>
                    </div>

                    <div className="secondary-product-info">
                        <ul>
                            <li>
                                <h3>product info title</h3>
                                <p>prodcut detail list point</p>
                            </li>
                            <li>
                                <h3>product info title</h3>
                                <p>prodcut detail list point</p>
                            </li>
                            <li>
                                <h3>product info title</h3>
                                <p>prodcut detail list point</p>
                            </li>
                        </ul>
                        <button className="btn">ADD TO CART</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedProduct;
