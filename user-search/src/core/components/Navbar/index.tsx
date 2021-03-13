import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo">
            <h4 className="nav-text-title">Bootcamp DevSuperior</h4>
            </Link>
        </div>

    </nav>
);

export default Navbar;