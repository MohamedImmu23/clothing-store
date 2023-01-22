import { React } from "react"

import CustomButton from "../CustomButton/CustomButton"

import CartItem from "./cart-item"

import { createStructuredSelector } from "reselect"

import "./cart-dropdown.styles.scss"

import { toggleCartHidden } from "../../react/cart/cart.actions"

import { connect } from "react-redux"
import { selectCartItems } from "../../react/cart/cart.selectors"
import { withRouter } from "react-router-dom"

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? (
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
            ))
            ) : (
            <span className='empty-message'>Your cart is empty</span>
         )}
        </div>
        <CustomButton onClick={()  => {
            history.push("/checkout")
            dispatch(toggleCartHidden())
            }} >
                Check Out</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default  withRouter(connect(mapStateToProps) (CartDropdown));