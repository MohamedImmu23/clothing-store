import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assests/crown.svg';
import CartIcon from './Cart/cart-icon'
import './header.styles.scss';
import CartDropdown from "./Cart/cart-dropdown"
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../react/user/user.selectors';
import { selectCartHidden } from '../react/cart/cart.selectors';
import { signOutStart } from '../react/user/user.action';

const Header = ({currentUser, hidden, signOutStart}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shoppage'>
      SHOP
    </Link>
    <Link className='option' to='/contact'>
      CONTACT
    </Link>
    <div>
      {
        currentUser ?
        <div onClick={signOutStart} className='cursor-pointer option uppercase' to='/signin'>
            Sign Out
        </div> 
        :
        <Link className='option uppercase' to='/signin'>
              Sign In
        </Link>
      }
    </div>
    <CartIcon />   
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
signOutStart: () => dispatch(signOutStart())
})

export default  connect(mapStateToProps, mapDispatchToProps)(Header);