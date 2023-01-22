import { React } from "react"

import "./checkout.styles.scss"

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartItemsTotal } from "../react/cart/cart.selectors"

import CheckoutItem from "../Components/checkout-item/checkoutItem";

import Checkout from "../Components/stripe/stripe";
  
const checkoutPage = ({cartItems, cartItemsTotal}) => {
    return ( 
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div> 
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}  />
                )
        }
        <div className="total">
            ${cartItemsTotal}
        </div>    
        <Checkout price={cartItemsTotal} />
    </div>
     );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
})
 
export default connect(mapStateToProps)(checkoutPage);