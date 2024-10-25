import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
import Modal from './Choix';





const Info_Barre = () => {

    
    const a=useNavigate();
    


    const [isModalOpen, setModalOpen] = useState(false);
    const [userChoice, setUserChoice] = useState('');

    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleChoice = (choice) => {
        setUserChoice(choice);
       
        handleCloseModal();
        //  rediriger vers une autre page ou effectuer une autre action
        
        if (choice === 'jeu') {
            a('/creer jeu');
          } else if (choice === 'promo') {
            a('/creer promo');
          }
        
    };
   
    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
           
           <div style={{display:'flex', width:'80%'}}>
                <h4 style={{width:'80%', textAlign:'left'}}>Liste des jeux et promotion</h4>
                <button style={{border:'none', background:'#cfbd97'}} onClick={handleButtonClick}>
                    Ajouter un jeu / promo
                </button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} onChoice={handleChoice}/>


           </div>


        </div>
      
    );
};

export default Info_Barre;