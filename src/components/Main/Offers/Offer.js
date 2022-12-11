import React from 'react';

const Offer = ({title, text, image, isRight}) => {

    return (
            <section className={`offer ${isRight === true ? 'reverse' : '' }`}>
                <img src={image} alt=""/>
                <div className='offer_box'>
                    <h2 className='offer_box_title'>{title}</h2>
                    <p className='offer_box_text'>{text}</p>
                    <div className='offer_box_more'>
                        <a href="/Repos/CodersLab/SenseofMove/public#">Więcej</a>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.75 8C14.75 9.79021 14.0388 11.5071 12.773 12.773C11.5071 14.0388 9.79021 14.75 8 14.75C6.20979 14.75 4.4929 14.0388 3.22703 12.773C1.96116 11.5071 1.25 9.79021 1.25 8C1.25 6.20979 1.96116 4.4929 3.22703 3.22703C4.4929 1.96116 6.20979 1.25 8 1.25C9.79021 1.25 11.5071 1.96116 12.773 3.22703C14.0388 4.4929 14.75 6.20979 14.75 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM7.47 5.53L9.19 7.25H4V8.75H9.19L7.47 10.47L8.53 11.53L11.53 8.53C11.6705 8.38937 11.7493 8.19875 11.7493 8C11.7493 7.80125 11.6705 7.61063 11.53 7.47L8.53 4.47L7.47 5.53Z" fill="#42424A"/>
                        </svg>
                    </div>
                </div>
            </section>
    );
};

export default Offer;