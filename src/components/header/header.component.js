import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as logo } from "../../assets/gecko.svg";

import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <logo className='logo' />
        </Link>
        <div classname='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Get in Touch
            </Link>
        </div>
    </div>
);

export default Header;