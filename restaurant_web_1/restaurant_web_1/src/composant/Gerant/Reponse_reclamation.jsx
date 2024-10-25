import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Side_bar from "./side-bar-gerant";
import Entete_g from "./entete-gerant";
import Description_reclamation from './description_reponse';







const Reponse_reclamation = () => {
    const test='GESTION DES RECLAMATIONS';
    return (
        
            <div  style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
            
                <Side_bar/>
                
                <section style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center', height:'100%'}}>                  
                    <Entete_g/>
                    
                    <Description_reclamation/>
                   
                    
                      
                </section>
                    
            </div>
        
                     
    );
};

export default Reponse_reclamation;