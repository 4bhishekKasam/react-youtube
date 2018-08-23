import React from 'react';
import YoutubeLogo from '../images/icon.png';
import title from '../images/title.png';
import './Nav.css';

const Nav = props => {
    return (
        <div className="menu">
            <nav className="main-nav">
                <a href="/">
                    <img src={YoutubeLogo} alt="youtube logo" className="youtube-logo" />
                </a>
                <a href="/">
                    <img src={title} alt="logo" className="logo" />
                </a>
                {props.children}
               
            </nav>
        </div>
    );

}

export default Nav;