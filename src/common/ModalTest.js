import React, {useState} from 'react';
import ModalReact from 'react-modal';
import SubmittedImg from "../assets/submitted_img.png"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

ModalReact.setAppElement('#root');

const ModalTest = ({modal, closeModal, buyTicket}) => {
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onClose = () => {
        setEmail("")
        setName("")
        setSubmitted(false)
        closeModal()
    }

    const onSubmit = (e) => {
        e.preventDefault();
        buyTicket(modal.webinar.id)
        setSubmitted(true)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    if (!modal.webinar.title) {
        return <></>
    }
    else {
        return (
            <ModalReact
                isOpen= {modal.active}
                onAfterOpen={null}
                onRequestClose={onClose}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className='modal'>
                    <div className='modal_button'>
                        <button className='button_close' onClick={onClose}>&#215;</button>
                    </div>
                    <div className='modal_box'>
                        <h3 className='modal_box_title'>{modal.webinar?.title}</h3>
                        <p className='modal_box_data'>{modal.webinar?.date}</p>
                    </div>
                    {submitted === false ? <form className='modal_form' onSubmit={onSubmit}>
                        <label className='modal_form_label'>Imię</label>
                        <input className='modal_form_input'
                               name="name"
                               type="text"
                               value={name}
                               required
                               onChange={handleChangeName}/>
                        <label className='modal_form_label'>E-mail</label>
                        <input className='modal_form_input'
                               name="email"
                               type="email"
                               value={email}
                               required
                               onChange={handleChangeEmail}/>
                        <button type='submit' className='button modal_form_button'>Zapisz się</button>
                    </form> : <div className='submitted_modal'>
                        <img className='submitted_modal_image' src={SubmittedImg} alt='good' />
                        <p className='submitted_modal_title'> Brawo {name} jesteś zapisana na webinar</p>
                        <button className='button submitted_modal_button'> Zamknij</button>
                    </div>
                    }
                </div>
            </ModalReact>
        );
    }
};

export default ModalTest;