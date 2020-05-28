import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <div className='header-container'>
        <h1>React Routing</h1>
        <nav>
            <Link to='/' className='nav-links'>Home</Link>
            <Link to='/about' className='nav-links'>About</Link>
            <Link to='/contact' className='nav-links'>Contact</Link>
        </nav>
    </div>
)