import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
            <div className="container">

                <a className="navbar-brand" href="#">
                    React User
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/about">
                                About Us
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/contact">
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>

                </div>
                    <Link className="btn btn-outline-light" to="/users/add">Add User</Link>

            </div>
        </nav>
    );
};
export default Navbar;
