import React from 'react';

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-container'>
            <ul className='nav-list'>
                <li classname='nav-item'><Link to ='/'>Home</Link></li>
                <li classname='nav-item'><Link to ='/about'>About Me</Link></li>
                <li classname='nav-item'><Link to ='/projects'>Projects</Link></li>
                <li classname='nav-item'><Link to ='/interests'>Interests</Link></li>
                <li classname='nav-item'><Link to ='/contact'>Contact Me</Link></li>
            </ul>    
        </div>    
    )
}

export default Nav;