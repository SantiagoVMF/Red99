import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import Description_reclamation from './description_reponse';







const Reponse_reclamation = () => {
    const test='GESTION DES RECLAMATIONS';
    return (
        
            <div  style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
            
                <Barre/>
                
                <section style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center', height:'100%'}}>                  
                    <Entete text={test}/>
                    
                    <Description_reclamation/>
                   
                    
                      
                </section>
                    
            </div>
        
                     
    );
};

export default Reponse_reclamation;