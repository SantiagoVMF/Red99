import React from 'react';
import Rectangle from '../image/Rectangle1.png';
import logo from '../image/logos.jpg'; 



const Sectionier = () => {
    return (
        <section className="bg-light " 
            style={{ 
                marginTop: '55px', 
                backgroundImage: `url(${Rectangle})`, 
                backgroundSize: 'cover', // Couvre toute la section
                backgroundPosition: 'center', // Centre l'image
                height: '200px', // Ajustez la hauteur selon vos besoins
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                color: 'white', // Couleur du texte
                position: 'relative'
        }}
        >
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
            <div style={{ 
                flex: 1, // Prend tout l'espace restant
                textAlign: 'center', // Centre le texte
                alignItems: 'center',
                fontFamily: 'times new romain',
                color: 'white' // Couleur du texte
                }}>

                <h1 style={{fontSize: '46px'}}>Bienvenue au Restaurant</h1>
                <h1 style={{fontSize: '46px'}}>MIAM MIAM</h1>
                <p style={{textAlign: 'left', marginLeft:'200px'}}>
                    le lieu où tous les délices se confrontent
                    </p>
                
                            </div>
        </section>
    );
};

export default Sectionier;