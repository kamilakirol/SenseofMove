import React from 'react';
import Offer from "./Offer";
import OfferImg1 from '../../../assets/offer_img1.png';
import OfferImg2 from '../../../assets/offer_img2.png';
import OfferImg3 from '../../../assets/offer_img3.png';
import OfferImg4 from '../../../assets/offer_img4.png';

const Offers = () => {
    return (
        <section className='offers'>
            <div className='offers_container container'>
                <Offer offerId='diagnosis' title='Diagnoza' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' image={OfferImg1}/>
                <Offer offerId='therapy' isRight title='Terapia' text='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores' image={OfferImg2} />
                <Offer title='Warsztaty' text='Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam' image={OfferImg3}/>
                <Offer isRight title='Konsultacje' text='Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur' image={OfferImg4}/>
            </div>
        </section>
    );
};

export default Offers;