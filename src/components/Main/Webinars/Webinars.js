import React, { useState} from 'react';
import CarouselWebinars from "./CarouselWebinars";
import {webinarsData} from "./WebinarsData";
import Modal from "../../../common/Modal";

const Webinars = () => {
    const websTickets = webinarsData.map(({id}) => ({tickets: 0, id}));
    const initialModal = {active: false, webinar: {}}
    const [modal, setModal] = useState(initialModal)

    const [usedTickets, setUsedTickets] = useState(websTickets);


    const closeModal = () => { setModal(initialModal) };
    const openModal = (webinar) => { setModal({active: true, webinar}) };

    const buyTicket = (ticketId) => {
        setUsedTickets((previousTickets) => previousTickets.map((element) => {
            const {tickets, id} = element;
            if (ticketId === id) {
                return { tickets: tickets +1, id}
            }
            return element
        }))
    }



    return (
        <section className='webinars'>
            <div className='webinars_container container'>
                <h2 className='webinars_title'>Webinary</h2>
                <section className='webinars_carousels'>
                    <CarouselWebinars webinarsData={webinarsData} usedTickets={usedTickets} openModal={openModal} />
                </section>
            </div>
            <Modal modal={modal} closeModal={closeModal} buyTicket={buyTicket}  />
        </section>
    );
};

export default Webinars;