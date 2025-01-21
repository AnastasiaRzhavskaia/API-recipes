import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
    <header className='header'>
        <div className='layer'>
        <div className='header-cont'>

            <nav className='logo-wrapper'>
                <div className='logo'>
                    <FontAwesomeIcon icon={faUtensils} className="brand"/>
                </div>
            </nav>

            <div className='header-text' >
                <h1>Recipe App React.js</h1>
                <p>Search & cook</p>
            </div>

        </div>
        </div>
        </header>
    )
}

export default Header;