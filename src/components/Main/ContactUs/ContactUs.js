import React, {useState} from 'react';
import ContactUsImage from "../../../assets/contactUs_img.png"

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]) ;

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = [];

        if (name.length < 2) {
            validationErrors.push('Imię musi składać się z powyżej 2 znaków')
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === true) {
            validationErrors.push('Email musi zawierać @')
        }
        setErrors(validationErrors);
    }

    return (
        <section className='contactUs'>
            <div className='contactUs_container container'>
                <div className='contactUs_box'>
                    <h2 className='contactUs_box_title'>Kontakt</h2>
                    <div className='contactUs_box_form'>
                        <form className='contactUs_box_form_container' onSubmit={handleSubmit}>
                            <label className='contactUs_form_label'>Imię i nazwisko</label>
                            <input className='contactUs_form_input'
                                   type="text"
                                   value={name}
                                   name="name"
                                   placeholder="Imię"
                                   onChange={handleChangeName} />
                            <label className='contactUs_form_label'>E-mail</label>
                            <input className='contactUs_form_input'
                                   type="text"
                                   value={email}
                                   name="email"
                                   placeholder="Email"
                                   onChange={handleChangeEmail}/>
                            <label className='contactUs_form_label'>Wiadomość</label>
                            <textarea className='contactUs_form_input'
                                      value={message}
                                      placeholder="Wiadomość"
                                      onChange={handleChangeMessage}/>
                            {
                                errors.map((error, i) => <p className='error_message' key={i}>{error}</p>)
                            }
                            <button className='contactUs_form_button button' type="submit" >Wyślij</button>
                        </form>
                        <img className='contactUs_box_image' src={ContactUsImage} alt='kid' />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;