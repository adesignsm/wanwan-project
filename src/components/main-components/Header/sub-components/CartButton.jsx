import React from 'react';
import "../../../../styles/cartbutton-styles/cartbutton.css";

const CartButton = () => {
    // const [total_items, setTotalItems] = useState(0);
 
    
  return (
   <div>
    <div className='cart-btn-wrapper'>
      <a href="">Cart(0)</a>
      <span className="cart-container">
        {/* <span className='cart-value'>({total_items})</span> */}
      </span>
   </div>
  </div>
  );
}

export default CartButton;



