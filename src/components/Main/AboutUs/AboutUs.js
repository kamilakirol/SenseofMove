import React from 'react';
import CarouselAboutUs from "./CarouselAboutUs";


const AboutUs = () => {
    return (
        <section className='aboutUs' id='aboutUs' data-aos="zoom-in">
            <div className='aboutUs_container container'>
                <div className='aboutUs_box'>
                    <h2 className='aboutUs_box_title'>Poznaj nas</h2>
                    <p className='aboutUs_box_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='aboutUs_carousel'>
                        <CarouselAboutUs />

                </div>
            </div>
        </section>
    );
};

export default AboutUs;