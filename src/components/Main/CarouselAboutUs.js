import React from 'react';
import Slider from "react-slick";
import {SliderData} from "./SliderData";

const CarouselAboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false,
        autoplay:true,
        centerMode:true,
        centerPadding: 0,
    }
    return (

            <Slider {...settings}>
                {SliderData.map((slide, index) => {
                    return (
                        <img src={slide.image} alt='therapis' />
                    )
                })}
            </Slider>

    );
};

export default CarouselAboutUs;