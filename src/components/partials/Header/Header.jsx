import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.scss';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
            <Link className="navbar-brand" to="#">Tech<span className="green">Topia</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="#">Start Here</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Community</Link>
                </li>
                <li>
                    <Link className="nav-link" to="#">Top Resources</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#">Disabled</Link>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 nav-input" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header;
