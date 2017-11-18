import React, { Component } from 'react';
import{
    Link
}from 'react-router-dom'

class Nav extends Component {
    render() {
        return (

            <nav>
                <h2>Types of Photography</h2>
                <ul>
                    <li><Link to="/">Aerial</Link></li>
                    <li><Link to="/Nature">Nature</Link></li>
                    <li><Link to="/Landscape">Landscape</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;