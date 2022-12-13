import React from 'react';
import Logo from "../Header/Logo";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container container'>
                <p className='footer_copy'>SenseofMove Copyright ©</p>
                <div className='footer_box'>
                    <Logo/>
                    <h1 className='footer_title'>SenseofMove</h1>
                </div>
                <div className='footer_icons'>
                    <p className='footer_icon'>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.95288 0.141602C2.29455 0.141602 0.140381 2.29577 0.140381 4.9541C0.140381 7.61244 2.29455 9.76661 4.95288 9.76661C7.61122 9.76661 9.76539 7.61244 9.76539 4.9541C9.81122 2.29577 7.65705 0.141602 4.95288 0.141602ZM4.95288 8.1166C3.21122 8.1166 1.83622 6.69577 1.83622 4.99994C1.83622 3.25827 3.25705 1.88327 4.95288 1.88327C6.69455 1.88327 8.06955 3.3041 8.06955 4.99994C8.11539 6.69577 6.69455 8.1166 4.95288 8.1166Z" fill="white"/>
                        </svg>
                    </p>
                    <p className='footer_icon'>
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.51389 10.0949V19.2431H6.54861V10.2378H9.05555L9.45139 6.95023H6.54861V4.94908C6.54861 3.9485 6.8125 3.37674 8 3.37674H9.58333V0.51794C9.31944 0.51794 8.39583 0.375 7.34028 0.375C5.09722 0.375 3.51389 1.94734 3.51389 4.6632V6.95023H0.875V10.0949H3.51389Z" fill="white"/>
                        </svg>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;