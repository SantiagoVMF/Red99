import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from './BarreNaviguer';
import Entete from './Entete';
import FonctionAdmin from './FonctionAdmin';
import PiedAdmin from './Pied_Admin';
import GestionEmploie from './Gestion_des_emploies/GestionEmploie';



const AccueilAdmin = () => {
    const test='ADMINISTRATION APPLICATION WEB';
    return (
        
            <div  style={{background: '#cfbd97', textAlign:'center',height: '100%',display: 'flex'}}>
            
                <Barre/>
                
                <div  style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center',height: '100%', flexDirection:'column'}}>                  
                    <Entete text={test}/>
                    <FonctionAdmin/>
                    
                </div>
                    {/* <PiedAdmin/>     */}
            </div>
        
                     
    );
};

export default AccueilAdmin;