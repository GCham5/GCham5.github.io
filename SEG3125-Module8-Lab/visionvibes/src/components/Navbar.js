import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a className="navbar-brand" href="#">VisionVibes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#barbers" className="nav-link"> Creatives</a>
                        </li>
                        <li className="nav-item">
                            <a href="#book" className="nav-link">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">About Us</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav >
    )
}

export default Navbar