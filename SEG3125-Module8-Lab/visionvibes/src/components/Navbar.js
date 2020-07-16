import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <Link to='/' className="navbar-brand">VisionVibes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/creatives" className="nav-link"> Creatives</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/beats" className="nav-link">Beats</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
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