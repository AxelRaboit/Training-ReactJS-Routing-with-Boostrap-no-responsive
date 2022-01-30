import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/brand-logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <Fragment>
            <nav className='container__nav bg-warning d-flex align-items-center px-3 m-0'>
                <img className='brand-logo nav__item' src={logo} alt="brand logo" />
                <Link className='nav__item text-uppercase text-decoration-none' to='/'>Accueil</Link>
                <Link className='nav__item text-uppercase text-decoration-none' to='/about'>À propos</Link>
                <Link className='nav__item text-uppercase text-decoration-none' to='/services'>Services</Link>
            </nav>
        </Fragment>
    )
};

export default Nav;
