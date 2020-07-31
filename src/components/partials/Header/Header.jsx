import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.scss';

const Header = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
            <Link class="navbar-brand" to="#">Tech<span class="green">Topia</span></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="#">Start Here</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="#">Community</Link>
                </li>
                <li>
                    <Link class="nav-link" to="#">Top Resources</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link disabled" to="#">Disabled</Link>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2 nav-input" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header;
