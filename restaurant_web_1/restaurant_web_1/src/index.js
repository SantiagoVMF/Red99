import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Accueil from './composant/Accueil/Accueil';
import AccueilAdmin from './composant/Administrateur/Accueil_admin';
//import Logique from './composant/Administrateur/Logique_navique';
//import Logique_etudiant from './composant/Etudiant/logique';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 

      
      
      {/*<Logique/> */}
      
     <App/>

        {/*<Logique_etudiant/>*/}


    
    

  </React.StrictMode>
);


reportWebVitals();
