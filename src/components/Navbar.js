import React from "react";
import { Icon } from '@iconify/react';
import '../App.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold fst-italic me-5" href="#"><Icon icon="game-icons:elephant-head" color="red" width="40" height="40" /></a>
                <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ms-auto">
                        <ul className="navbar-nav me-0 mb-2 mb-lg-0 nav">
                            <li className="nav-item">
                                <a className="nav-link  fw-bold me-3 " id="icon" href="#"> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold fw-bold me-3" id="icon" href="#" >Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold me-3" id="icon" href="#">Wishlist</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  fw-bold me-3" id="icon" href="#" >Account</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}
export default Navbar;