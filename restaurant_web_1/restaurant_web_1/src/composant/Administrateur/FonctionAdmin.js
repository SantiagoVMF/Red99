import React from 'react';
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../image/a1.png';
import image2 from '../../image/a2.png';
import image3 from '../../image/a3.png';
import image4 from '../../image/a4.png';
import image5 from '../../image/a5.png';
import image6 from '../../image/a6.png';


const FonctionAdmin = () => {

    const emploi =  useNavigate();
    const menu= useNavigate();
    const stats=useNavigate();
    const jeu=useNavigate();
    const recla=useNavigate();

    const clickemploi = () => {
        emploi('/gestionEmploie'); // Redirige vers la page Gestion des emploie
    };
    const clickmenu = () => {
        menu('/gestionMenu'); // Redirige vers la page Gestion des menus
    };
    const clickstat = () => {
        stats('/stats'); // Redirige vers la page statistiques 
    };
    const clickjeu = () => {
        jeu('/accueil_jeu'); // Redirige vers la page jeu et promo
    };
    const clickrecla=()=>{
        recla('/accueil reclamation')
    }
    

    return (
       
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',height:'100%',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >


            <button class="col-3  " style={{
                color:'#ffffff',
                backgroundImage:`url(${image1})`,
                height:'150px',
                backgroundSize: 'cover', // Pour couvrir tout le bouton
                backgroundPosition: 'center' // Pour centrer l'image
            }}
            onClick={clickemploi}
            >
                GESTION DES EMPLOYES
            </button>
            <button class="col-3 " style={{
                color:'#ffffff',
                backgroundImage:`url(${image2})`,
                height:'150px',
                backgroundSize: 'cover', // Pour couvrir tout le bouton
                backgroundPosition: 'center' // Pour centrer l'image
            }}
            onClick={clickmenu}
            >
                GESTION DES MENU
            </button>
            <button class="col-3 " style={{
                color:'#ffffff',
                backgroundImage:`url(${image3})`,
                height:'150px',
                backgroundSize: 'cover', // Pour couvrir tout le bouton
                backgroundPosition: 'center' // Pour centrer l'image
            }}
            onClick={clickstat}
            >
                STATISTIQUES
            </button>
            <button class="col-3 " style={{
                color:'#ffffff',
                backgroundImage:`url(${image4})`,
                height:'150px',
                backgroundSize: 'cover', // Pour couvrir tout le bouton
                backgroundPosition: 'center' // Pour centrer l'image
            }}
            onClick={clickjeu}
            >
                PROMO & JEUX
            </button>
            <button class="col-3 " style={{
                color:'#ffffff',
                backgroundImage:`url(${image5})`,
                height:'150px',
                backgroundSize: 'cover', // Pour couvrir tout le bouton
                backgroundPosition: 'center' // Pour centrer l'image
            }}
            onClick={clickrecla}
            >
                RECLAMATIONS
            </button>
            <button class="col-3 " style={{
                color:'#ffffff',
                backgroundImage:`url(${image6})`,
                height:'150px',
                backgroundSize: 'cover', // Pour couvrir tout le bouton
                backgroundPosition: 'center' // Pour centrer l'image
            }}>
                PARAMETRES
            </button>
            


        </div>

    );
};

export default FonctionAdmin;
