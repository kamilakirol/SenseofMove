import React, {useState} from 'react';
import ModalReact from 'react-modal';

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
    console.log({modal, closeModal, buyTicket});
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
                    <button onClick={onClose}>close</button>
                    <h3 className='modal_title'>{modal.webinar?.title}</h3>
                    <p className='modal_data'>{modal.webinar?.date}</p>
                    {submitted === false ? <form className='modal_form' onSubmit={onSubmit}>
                        <label className='modal_form_label'>Imię</label>
                        <input className='modal_form_input'
                               name="name"
                               type="text"
                               value={name}
                               placeholder="Imię"
                               required
                               onChange={handleChangeName}/>
                        <label className='modal_form_label'>E-mail</label>
                        <input className='modal_form_input'
                               name="email"
                               type="email"
                               placeholder="E-mail"
                               value={email}
                               required
                               onChange={handleChangeEmail}/>
                        <button type='submit' className='button modal_form_button'>Zapisz się</button>
                    </form> : <div className='submitted_modal'>
                        <h3> Brawo {name} jesteś zapisana na webinar</h3>
                    </div>
                    }
                </div>
            </ModalReact>
        );
    }
};

export default ModalTest;