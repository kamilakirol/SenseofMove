import React from 'react';
import Logo from "./Logo";
import { Link } from 'react-scroll';


const Header = () => {
    return (
        <header>
            <div className='header'>
                <div className='header_container container'>

                    <div className= 'header_box_title'>
                        <Logo/>
                        <h1 className='header_title'>
                            <Link activeClass="active" to="banner" offset={-100} duration={300}>
                                SenseofMove
                            </Link>
                        </h1>
                    </div>
                    <nav className='header_box_navigation'>
                        <input type='checkbox' className='menu_btn' id='menu_btn'/>
                        <div className='hamburger'>
                            <label htmlFor="menu_btn" className="menu_toggle">
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>
                            </label>
                        </div>
                        <div className='header_navigation'>
                            <ul className='header_navigation_menu'>
                                <li>
                                    <Link activeClass="active" className="header_navigation_element" to="diagnosis" offset={-100} duration={300}>
                                        Diagnoza
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClass="active" className="header_navigation_element" to="therapy" offset={-100} duration={300}>
                                        Terapia
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClass="active" className="header_navigation_element" to="aboutUs" offset={-100} duration={300}>
                                        Poznaj nas
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClass="active" className="header_navigation_element" to="webinars" offset={-100} duration={300}>
                                        Webinary
                                    </Link>
                                </li>
                            </ul>
                            <button className='button header_button'>
                                <Link activeClass="active" className="header_navigation_element" to="contactUs" offset={-100} duration={300}>
                                    Kontakt
                                </Link>
                            </button>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;