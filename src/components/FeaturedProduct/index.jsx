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
                <h1>Product title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit commodi magnam debitis? 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nobis asperiores dicta modi.</p>
                <h3>Product info title</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <button className="btn">ADD TO CART</button>
                </div>

            </div>
        </div>
    );
};

export default FeaturedProduct;
