import React from 'react';

const Webinar = ({title, date, text, image}) => {
    return (
        <section className='webinar'>
            <div className='webinar_box'>
                <div className='webinar_box_info'>
                    <h3 className='webinar_info_title'>{title}</h3>
                    <p className='webinar_info_data'>{date}</p>
                </div>
                <p className='webinar_box_text'>{text}</p>
                <button className='button webinar_box_button'>Zapisz się</button>
                <p className='webinar_box_place'>Wolne miejsca: 6</p>
            </div>
            <img src={image} alt="kid"/>
        </section>
    );
};

export default Webinar;