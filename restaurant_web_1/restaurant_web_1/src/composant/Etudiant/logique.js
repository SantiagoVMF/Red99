import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Services_E from '../Etudiant/Service_E';
import Accueil_Etudiant from './Accueil_Etudiant';
import Apropo_E from './APropos';

const Logique_etudiant = () => {
    
    return (
        <Router>
        
            <Routes>
                <Route path="/" element={<Accueil_Etudiant/>}/> 

                <Route path="/accueil étudiant" element={<Accueil_Etudiant/>}/>

                <Route path='/service etudiant' element={<Services_E />} /> 
                <Route path='/A propos etudiant' element={<Apropo_E />} /> 


            </Routes>
        
        </Router>
           
    );
};

export default Logique_etudiant;