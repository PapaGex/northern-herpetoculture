import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from "../../assets/dexagex.svg";

import './header.style.scss';

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut}>Sign Out</div>
                    :
                    <Link className='option' to='/authent'>Sign In</Link>
            }
        </div>
    </div>
);

export default Header;