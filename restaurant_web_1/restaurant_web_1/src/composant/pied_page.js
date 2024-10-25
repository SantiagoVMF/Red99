import React from 'react';
import logo from '../image/logos.jpg'

const Pied_page = () => {
    return (
        <footer className="bg-dark text-white text-center p-3" 
            style={{display: 'flex', height:'100px', position: 'relative', textAlign: 'center',
                alignItems: 'center', background: 'linear-gradient(90deg, #000000, #cfbd97)'}}>
            <img src={logo} alt='Logo boite'
                style={{ 
                    
                    width: 'auto', // Ajuste la largeur automatiquement        
                    position: 'relative', // Position absolue pour rester à gauche
                    left: '0', // Positionne à gauche
                    top: '0', // Positionne en haut
                    height: '100%', // Adapte la hauteur de l'image à celle de la section
                    borderRadius: '0 50% 50% 0' // Arrondit les coins en bas à droite
                }} 
            ></img>
            <div style={{textAlign: 'center', alignItems: 'center', flex:1}}>
                <p >&copy; 2024 Mon Site Web - Tous droits réservés</p>
            </div>
            
        </footer>
    );
};

export default Pied_page;