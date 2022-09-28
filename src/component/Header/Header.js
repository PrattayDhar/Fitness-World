import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2><FontAwesomeIcon icon={faDumbbell}/>  Fitness World</h2>
            <div> <a href="#">Home</a>
           <a href="#">Tips</a></div>
          
            
        </div>
    );
};

export default Header;