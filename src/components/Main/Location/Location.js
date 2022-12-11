import React from 'react';
import LocationImg from "../../../assets/location_img.png"

const Location = () => {
    return (
        <section className='location'>
            <div className='location_container container'>
                <div className='location_box'>
                    <h2 className='location_box_title'>Lokalizacja</h2>
                    <p className='location_box_text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img className='location_box_image' src={LocationImg} alt='map'/>
                </div>
            </div>
        </section>
    );
};

export default Location;