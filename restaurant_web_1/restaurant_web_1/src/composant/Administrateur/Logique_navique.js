import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from './BarreNaviguer';
import Entete from './Entete';
import FonctionAdmin from './FonctionAdmin';
import PiedAdmin from './Pied_Admin';
import GestionEmploie from './Gestion_des_emploies/GestionEmploie';
import GestionMenu from './Gestion_des_Menu/GestionMenu';
import AccueilAdmin from './Accueil_admin';
import Statistique from './Stat/Statisques';
import PageCreer from './Gestion_des_emploies/PageCreer';
import CreerMenu from './Gestion_des_Menu/CreerMenu';
import Accueil_Jeu from './Jeux&Promo/Accueil_Jeu';
import Creer_jeu from './Jeux&Promo/Creer_jeux';
import Creer_promo from './Jeux&Promo/Creer_promo';
import Accueil_reclamation from './Reclamation/Accueil_reclamation';
import Reponse_reclamation from './Reclamation/Reponse_reclamation';
import App from '../../App';

import Services from '../Accueil/nos_service';
import SeConnecter from '../Accueil/Seconnecter';
import CreerCompte from '../Accueil/CreerCompte';
import Apropos from '../Accueil/Apropos';
import Accueil from '../Accueil/Accueil';

import Services_E from '../Etudiant/Service_E';

const Logique = () => {
    
    return (
        <Router>
        
            <Routes>
                <Route path="/" element={<AccueilAdmin/>}/> 
                <Route path="/accueiladmin" element={<AccueilAdmin/>}/>
                <Route path="/gestionEmploie" element={<GestionEmploie/>} />
                <Route path="/gestionMenu" element={<GestionMenu/>} />
                <Route path="/stats" element={<Statistique/>} />
                <Route path='/page_creer' element={<PageCreer/>}/>
                <Route path='/detail_menu' element={<CreerMenu/>}/>
                <Route path='/accueil_jeu' element={<Accueil_Jeu/>}/>
                <Route path='/creer jeu' element={<Creer_jeu/>}/>
                <Route path='/creer promo' element={<Creer_promo/>}/>
                <Route path='/accueil reclamation' element={<Accueil_reclamation/>}/>
                <Route path='/description reclamation' element={<Reponse_reclamation/>}/>
                <Route path='/deconnecter' element={<Accueil/>}/>


                <Route path="/acceuil" element={<Accueil/>} />
                <Route path="/service" element={<Services />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/seconnecter" element={<SeConnecter />} />
                <Route path="/creercompte" element={<CreerCompte />} /> 

                <Route path='/service etudiant' element={<Services_E />} /> 


            </Routes>
        
        </Router>
           
    );
};

export default Logique;