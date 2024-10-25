import React from "react";
import image1 from './Rectangle-75.png'
import image2 from './Zeduc.png'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Side_bar = () => {
    return (
    
            <div style={{background:'linear-gradient(290deg, #000000, #000000 ,#cfbd97)', color:"#cfbd97", width:"250px", height:'110vh', justifyContent:'center',textAlign:'center', fontFamily:'times new roman',}}>
                
                    <img src={image1} alt="Logo de connexion" style={{width: '250px', height:'100px',margin:'20px', objectFit: 'contain'}}/>
                    <h4 style={{marginLeft:'40px'}}>Nom du Gerant</h4><br /><br />
                
                    <ul style={{listStyle:'none', }}>
                        <li onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}><Link style={{color:'white'}} to = '/Accueil gerant'> Acceuil</Link></li><br />
                        <li onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}><Link style={{color:'white'}} to = '/gerant_commande'> Gestion des commandes</Link></li><br />
                        <li onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}><Link style={{color:'white'}} to = '/gerant_employe'> Gestion des employes</Link></li><br />
                        <li onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}><Link style={{color:'white'}} to = '/gerant_satistique'> Statistique</Link></li><br />
                        <li onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}><Link style={{color:'white'}} to = '/gerant_reclamation'> Gestion des reclamations</Link></li><br />
                    </ul>
                    <ul style={{listStyle:'none', }}>
                        <li onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}><Link style={{color:'white'}} to = '/deconnecter'> DECONNEXION</Link></li><br />
                    </ul>
                
                <div style={{position:'relative', bottom:0,heigh:200}}>
                    <img src={image2} className="im" alt="Logo de Zeduc-Space" style={{width: '250px', height:'80px', objectFit: 'contain',position:'relative', bottom:0, }} />
                </div>
            </div>
        
    )
}

export default Side_bar;