import React from 'react';

const Webinar = ({webinar, openModal, usedTickets}) => {
    const {title, date, text, image, tickets, id} = webinar;
    const handleOpen = () => openModal(webinar);

    let availableTickets = tickets - usedTickets.find((usedTicket) => usedTicket.id === id).tickets;

    return (
        <section className='webinar'>
            <div className='webinar_box'>
                <div className='webinar_info'>
                    <h3 className='webinar_info_title'>{title}</h3>
                    <p className='webinar_info_data'>{date}</p>
                </div>
                <p className='webinar_box_text'>{text}</p>
                <button className='button webinar_box_button' onClick={handleOpen}>Zapisz się</button>
                <p className='webinar_box_place'>Wolne miejsca: {availableTickets}</p>
            </div>
            <img className='webinar_image' src={image} alt="kid"/>
        </section>
    );
};

export default Webinar;