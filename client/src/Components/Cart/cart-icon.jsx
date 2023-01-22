import { React } from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../react/cart/cart.actions"

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import './cart-icon.styles.scss'

import { selectCartItemsCount } from "../../react/cart/cart.selectors";

import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);
