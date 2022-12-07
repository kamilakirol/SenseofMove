import React from 'react';
import Slider from "react-slick";
import Webinar from "./Webinar";
import WebinarImg1 from "../../assets/webinar_img1.png";
import WebinarImg2 from "../../assets/webinar_img2.png";

const CarouselWebinars = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 100000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay:true,
        centerMode:true,
        arrows:true
    }

    return (
        <Slider {...settings}>
            <Webinar title='Lorem ipsum' date='22.01.2023' image={WebinarImg1} text='Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.' />
            <Webinar title='Lorem ipsum' date='22.05.2023' image={WebinarImg2} text='Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.' />
        </Slider>
    );
};

export default CarouselWebinars;