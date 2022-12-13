import React from 'react';
import Slider from "react-slick";
import Webinar from "./Webinar";

const CarouselWebinars = ({webinarsData, openModal, usedTickets}) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 100000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        centerMode:true,
        arrows:false,
        centerPadding: 0
    }

    return (
        <Slider {...settings}>
            {webinarsData.map((webinar) => {
                return  <Webinar key={webinar.id} webinar={webinar} openModal={openModal} usedTickets={usedTickets} />
            }) }
        </Slider>
    );
};

export default CarouselWebinars;