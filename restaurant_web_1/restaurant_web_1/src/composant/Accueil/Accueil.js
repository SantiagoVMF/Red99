import React from 'react';
import Nav from '../entete';
import Sectionier from '../Section_page';
import Formulaire from '../Formulaire';
import Pied_page from '../pied_page';
import Services from './nos_service';
import SeConnecter from './Seconnecter';
import CreerCompte from './CreerCompte';
import Apropos from './Apropos';




const Accueil = () => {
    return (
        <div style={{background: 'linear-gradient(180deg,#cfbd97, #000000 )', 
            height: '100vh',display: 'flex', flexDirection: 'column'}}>
           
            <Nav />
            <Sectionier/>

            <div className='container-fluid' style={{color: "#000000", background: 'linear-gradient(180deg,#cfbd97, #000000 )', fontFamily: 'Times New Roman',
                flex: 1, display: 'flex', flexDirection: 'column',  justifyContent: 'center'}}>
                    <Formulaire/>
            </div>

            <div style={{ marginTop: 'auto' }}>
            <Pied_page/>     
            </div>

        </div>
      
    );
};

export default Accueil;

