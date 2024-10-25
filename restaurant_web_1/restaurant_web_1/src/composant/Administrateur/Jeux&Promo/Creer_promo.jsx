import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import Formualire_promo from './Formulaire_promo';






const Creer_promo = () => {
    const test='JEUX & PROMOTION';
    return (
        
            <div  style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
            
                <Barre/>
                
                <section style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center', height:'100%'}}>                  
                    <Entete text={test}/>
                    <Formualire_promo/>
                   
                    
                    
                </section>
                    {/* <PiedAdmin/>     */}
            </div>
        
                     
    );
};

export default Creer_promo;