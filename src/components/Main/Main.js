import React, {useEffect} from 'react';
import Banner from "./Banner/Banner";
import Offers from "./Offers/Offers";
import AboutUs from "./AboutUs/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Webinars from "./Webinars/Webinars";
import Location from "./Location/Location";
import ContactUs from "./ContactUs/ContactUs";

import Aos from 'aos';
import'aos/dist/aos.css';

const Main = () => {

    //hook pojawienie się jednorazowej animacji

    useEffect(() => {
        Aos.init({duration: 3000, easing: 'ease-in-out' })
    }, [])

    return (
        <>
            <Banner />
            <Offers />
            <AboutUs />
            <Webinars />
            <Location />
            <ContactUs />
        </>
    );
};

export default Main;