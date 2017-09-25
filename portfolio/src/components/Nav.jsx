import React from 'react';

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav-container'>
            <ul className='nav-list'>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/about'>About Me</Link></li>
                <li><Link to ='/projects'>Projects</Link></li>
                <li><Link to ='/interests'>Interests</Link></li>
                <li><Link to ='/contact'>Contact Me</Link></li>
            </ul>    
        </div>    
    )
}

export default Nav;