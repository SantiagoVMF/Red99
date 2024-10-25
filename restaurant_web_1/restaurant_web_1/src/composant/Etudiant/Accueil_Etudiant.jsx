import React from 'react';
import Entete_etudiants from './Entete_etudiant';
import Sectionier from '../Section_page';
import Formulaire_etudiant from './Formulaire_etudiant';
import Pied_page_E from './Pied_page_E';






const Accueil_Etudiant = () => {
    return (
        <div style={{background: 'linear-gradient(180deg,#cfbd97, #000000 )', 
            height: '100vh',display: 'flex', flexDirection: 'column'}}>
           
            <Entete_etudiants/> 
            <Sectionier/>

            <div className='container-fluid' style={{color: "#000000", background: 'linear-gradient(180deg,#cfbd97, #000000 )', fontFamily: 'Times New Roman',
                flex: 1, display: 'flex', flexDirection: 'column',  justifyContent: 'center'}}>
                    <Formulaire_etudiant/>
            </div>

            <div style={{ marginTop: 'auto' }}>
                    <Pied_page_E/>
            </div>

        </div>
      
    );
};

export default Accueil_Etudiant;
