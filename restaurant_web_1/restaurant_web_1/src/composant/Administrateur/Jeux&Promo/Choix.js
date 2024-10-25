import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

// Composant Modal
const Modal = ({ isOpen, onClose, onChoice }) => {

    // Styles pour la modale
    const modalStyles = {
        overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        },
        modal: {
        background: 'white',
        
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width:'300px', 
        height:'200px',
        },
    };

   
    if (!isOpen) return null;

    return (
        <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>

            <h2 style={{textAlign:'center', color:'#000', background:'#cfbd97'}}>Veuillez faire un choix</h2>

            <button style={{margin: '10px 10px', borderRadius:'10px', background:'#cfbd97', border:'none' , width:'100px'}} onClick={() => onChoice('jeu')}>Jeu</button>
            <button style={{margin: '10px 10px', borderRadius:'10px', background:'#cfbd97', border:'none', width:'100px'}} onClick={() => onChoice('promo')}>Promo</button>
            <div style={{margin: '10px 0', width:'100%'}}>
                <button style={{borderRadius:'10px', background:'#cfbd', border:'none', width:'100%'}} onClick={onClose}>Annuler</button>
            </div>
            
        </div>
        </div>
    );
};


export default Modal;