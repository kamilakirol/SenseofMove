import React from 'react';
import CarouselWebinars from "./CarouselWebinars";

const Webinars = () => {
    return (
        <section className='webinars'>
            <div className='webinars_container container'>
                <h2 className='webinars_title'>Webinary</h2>
                <section className='webinars_carousels'>
                    <CarouselWebinars />
                </section>
            </div>
        </section>
    );
};

export default Webinars;