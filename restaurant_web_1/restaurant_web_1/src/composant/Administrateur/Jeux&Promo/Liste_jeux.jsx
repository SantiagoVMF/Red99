import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jeuxstyle.css';
import {  useNavigate } from 'react-router-dom';
import Modal from './Choix';



const Liste_jeux = () => {
    const nom_activité=["Games", "casch", "rien"];
    const types=["Jeu", "Promo", "Promo"];
    const description=["...", "...", "..."];

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
        // Redirection ou action en fonction du choix
        
        handleCloseModal();
        // Ici vous pouvez rediriger vers une autre page ou effectuer une autre action
        if (choice === 'jeu') {
            a('/creer jeu');
          } else if (choice === 'promo') {
            a('/creer promo');
          }
        
    };
    

    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
                
                <table style={{borderCollapse:'collapse', width:'80%', background:'#ffffff', color:'#000'}}>
                    <thead>
                        <tr >
                            <th>Nom Actibité</th>
                            <th>Types</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {nom_activité.map((nom_activité, i)=>(
                        <tr key={i}>
                            <td >{nom_activité}</td>
                            <td >{types[i]}</td>
                            <td >{description[i]}</td>
                            <td>
                                <button style={{background:'#11AF18', color:'#fff', borderRadius:'25px'}} onClick={handleButtonClick}>
                                    Modifier
                                </button>
                                <Modal isOpen={isModalOpen} onClose={handleCloseModal} onChoice={handleChoice}/>

                                <button style={{background:'#F90A0A', color:'#fff', borderRadius:'25px'}}>Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </table>
            
           
        </div>
      
    );
};

export default Liste_jeux;