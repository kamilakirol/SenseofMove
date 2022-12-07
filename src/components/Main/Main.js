import React from 'react';
import Banner from "./Banner";
import Offers from "./Offers";
import AboutUs from "./AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Webinars from "./Webinars";

const Main = () => {
    return (
        <>
            <Banner />
            <Offers />
            <AboutUs />
            <Webinars />
        </>
    );
};

export default Main;