import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GestionEmploie from './composant/Administrateur/Gestion_des_emploies/GestionEmploie';
import GestionMenu from './composant/Administrateur/Gestion_des_Menu/GestionMenu';
import AccueilAdmin from './composant/Administrateur/Accueil_admin';
import Statistique from './composant/Administrateur/Stat/Statisques';
import PageCreer from './composant/Administrateur/Gestion_des_emploies/PageCreer';
import CreerMenu from './composant/Administrateur/Gestion_des_Menu/CreerMenu';
import Accueil_Jeu from './composant/Administrateur/Jeux&Promo/Accueil_Jeu';
import Creer_jeu from './composant/Administrateur/Jeux&Promo/Creer_jeux';
import Creer_promo from './composant/Administrateur/Jeux&Promo/Creer_promo';
import Accueil_reclamation from './composant/Administrateur/Reclamation/Accueil_reclamation';
import Reponse_reclamation from './composant/Administrateur/Reclamation/Reponse_reclamation';

import Services from './composant/Accueil/nos_service';
import SeConnecter from './composant/Accueil/Seconnecter';
import CreerCompte from './composant/Accueil/CreerCompte';
import Apropos from './composant/Accueil/Apropos';
import Accueil from './composant/Accueil/Accueil';

import Services_E from './composant/Etudiant/Service_E';
import Accueil_Etudiant from './composant/Etudiant/Accueil_Etudiant';
import Apropo_E from './composant/Etudiant/APropos';


import Gerant_accueil from './composant/Gerant/Gerant_accueil';
import Gerant_com from './composant/Gerant/gerant-commande';
import Gerant_employe from './composant/Gerant/gerant-employe';
import Gerant_stat from './composant/Gerant/gerant-stat';
import Gerant_reclamation from './composant/Gerant/gerant-reclamation';



const App = () => {
    
    return (
        <Router>
          <div style={{background: '#cfbd97'}}>
        
            <Routes>

              {/* Page accueil principal */}

                <Route path="/" element={<Accueil/>}/> 
                <Route path="/acceuil" element={<Accueil/>} />
                <Route path="/service" element={<Services />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/seconnecter" element={<SeConnecter />} />
                <Route path="/creercompte" element={<CreerCompte />} /> 

              {/* Page administrateur */}

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


                {/* Page Etudiant */}

                <Route path="/accueil étudiant" element={<Accueil_Etudiant/>}/>
                <Route path='/service etudiant' element={<Services_E />} /> 
                <Route path='/A propos etudiant' element={<Apropo_E />} />


                {/* Gerant */}
                
                <Route path='/Accueil gerant' element={<Gerant_accueil />} />
                <Route path='/gerant_commande' element={<Gerant_com />} />
                <Route path='/gerant_employe' element={<Gerant_employe />} />
                <Route path='/gerant_satistique' element={<Gerant_stat />} />
                <Route path='/gerant_reclamation' element={<Gerant_reclamation />} />
                <Route path='/deconnecter' element={<Accueil />} />



            </Routes>
        </div>
        </Router>
           
    );
};

export default App;