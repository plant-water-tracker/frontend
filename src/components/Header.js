import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <p>Plant Water Tracker</p>
            <ul className='nav'>
                <li><Link to="login">Login</Link></li>
                <li><Link to="user-dash">User Dash</Link></li>
                <li><Link to="logout">Logout</Link></li>
            </ul>
        </div>
    );
}

export default Header;
