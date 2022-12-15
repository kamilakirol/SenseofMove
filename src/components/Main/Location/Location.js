import React from 'react';
import LocationImg from "../../../assets/location_img.png";
import Weather from "../Weather/Weather"

const Location = () => {
    return (
        <section className='location'>
            <div className='location_container container'>
                <div className='location_box'>
                    <h2 className='location_box_title'>Lokalizacja</h2>
                    <div className='location_box_info'>
                        <div className='location_box_info_address'>
                            <h3 className='location_box_info_address_title'>SenseofMove </h3>
                            <p className='location_box_info_address_street'>ul. Mirka 12 </p>
                            <p className='location_box_info_address_city'>Warszawa 05-456 </p>
                            <p className='location_box_info_address_phone'>tel. 458 658 546 </p>
                        </div>
                        <Weather />

                    </div>
                    <img data-aos="fade-down" className='location_box_image' src={LocationImg} alt='map'/>
                </div>
            </div>
        </section>
    );
};

export default Location;