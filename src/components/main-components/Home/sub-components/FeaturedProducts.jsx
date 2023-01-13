import React from "react";
import logo from "../../../../assets/main-assets/loading-logo-original.svg";
import "../../../../styles/featuredproducts-styles/featuredproducts.css";




const FeaturedProducts = () => {


    return (
        <>
        
        <div className="product-container">
                <div>
                   <img src={logo}/>
                   </div>

        <div className="flexbox-item">
            <h2>Product Title</h2>
          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Excepturi laudantium quis inventore. 
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Nostrum dolorem rerum, maxime illum neque quod aliquid 
          quia nulla iusto molestiae ducimus dolores! Repudiandae, consectetur
           autem aliquam sed perspiciatis laboriosam nobis!</p>
           <p> Measurement: 22 x 22 x 22 cm</p>
           <p> Price: $$</p>

           <button className="btn">ADD TO CART</button>
          </div>                
      </div>
        </>
    )
}

export default FeaturedProducts;