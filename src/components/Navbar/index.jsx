import CartWidget from "../CartWidget";
import Navbar from "navbar.css"
import React from 'react';

export const Navbar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#"> Mi marca</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#"> Cat1</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"> Cat2</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"> carrito</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}