import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import Liste_reclamation from './Liste_reclamation';






const Accueil_reclamation = () => {
    const test='GESTION DES RECLAMATIONS';
    return (
        
            <div  style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
            
                <Barre/>
                
                <section style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center', height:'100%'}}>                  
                    <Entete text={test}/>

                    <Liste_reclamation/>
                      
                </section>
                    
            </div>
        
                     
    );
};

export default Accueil_reclamation;