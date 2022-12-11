import React from 'react';
import Banner from "./Banner/Banner";
import Offers from "./Offers/Offers";
import AboutUs from "./AboutUs/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Webinars from "./Webinars/Webinars";
import Location from "./Location/Location";
import Registration from "./Webinars/Registration/Registration";
import ContactUs from "./ContactUs/ContactUs";

const Main = () => {
    return (
        <>
            <Banner />
            <Offers />
            <AboutUs />
            <Webinars />
            {/*<Registration />*/}
            <Location />
            {/*<ContactUs />*/}

        </>
    );
};

export default Main;