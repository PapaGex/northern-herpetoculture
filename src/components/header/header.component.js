import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from "../../assets/logoPady.svg";

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='optionTwo' to='/shop'>
                Get in Touch
            </Link>
            {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                )
                : (
                    <Link className='option' to='/authent'>Sign In</Link>
                )}
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropdown/>
        }
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);