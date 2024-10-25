import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import Info_Barre from './Info_Barre';
import Liste_jeux from './Liste_jeux';






const Accueil_Jeu = () => {
    const test='JEUX & PROMO';
    return (
        
            <div  style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
            
                <Barre/>
                
                <section style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center', height:'100%'}}>                  
                    <Entete text={test}/>
                    <Info_Barre/>
                    <Liste_jeux/>
                   
                    
                    
                </section>
                    {/* <PiedAdmin/>     */}
            </div>
        
                     
    );
};

export default Accueil_Jeu;