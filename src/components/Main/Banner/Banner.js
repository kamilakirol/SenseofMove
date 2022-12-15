import React from 'react';
import BannerImg from '../../../assets/banner_img.png'

const Banner = () => {
    return (
        <section className='banner' id='banner'>
            <div className='banner_container container'>

                <div className='banner_box'>
                    <h1 className='banner_box_title'>Gabinet integracji <br/> sensorycznej</h1>
                    <p className='banner_box_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='banner_box_buttons'>
                        <button className='button banner_button'><a className='banner_button_nav' href="#diagnosis">Diagnoza</a></button>
                        <button className='button_white banner_button'><a className='banner_button_nav banner_button_white' href="#therapy">Terapia</a></button>
                    </div>
                </div>
                <img className='banner_img' src={BannerImg} alt="kid"/>
            </div>
        </section>
    );
};

export default Banner;