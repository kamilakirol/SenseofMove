// import React, {useState, useEffect} from 'react';
//
// const ContactUs = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('')
//     const [errors, setErrors] = useState([]) ;
//
//     const handleChangeName = (e) => {
//         setName(e.target.value);
//     }
//
//     const handleChangeEmail = (e) => {
//         setEmail(e.target.value);
//     }
//
//     useEffect(() => {
//         const validation = [];
//
//         if (name.length < 2) {
//             validation.push('Imię musi składać się z powyżej 2 znaków')
//         }
//
//         if (email !== '@') {
//             validation.push('Email musi zawierać @')
//         }
//
//         setErrors(validation)
//     }, [])
//
//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }
//
//     return (
//         <section className='contactUs'>
//             <div className='contactUs_container container'>
//                 <div className='contactUs_box'>
//                     <h2 className='contactUs_box_title'>Kontakt</h2>
//                     <p className='contactUs_box_text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                     <form className='contactUs_box_form' onSubmit={handleSubmit}>
//                         <label>Imię i nazwisko</label>
//                         <input type="text" value={name} onChange={handleChangeName}/>
//                         <label>e-mail</label>
//                         <input type="text" value={email} onChange={handleChangeEmail}/>
//                         <label>Wiadomość</label>
//                         <textarea>...</textarea>
//                         <div>{name && email && errors.map(error => <div key={error}>{error}</div>)}
//                             {errors.length === 0 && <input type="submit" value="Prześlij" />}</div>
//                         <button type="submit" >Wyślij</button>
//                     </form>
//                 </div>
//             </div>
//
//         </section>
//     );
// };
//
// export default ContactUs;