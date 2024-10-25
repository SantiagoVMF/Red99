import { useNavigate } from "react-router-dom";


const a=useNavigate();

const base_donne='Etudiant'

const handleChoice = () => {
    
    //  rediriger vers une autre page ou effectuer une autre action
    
    if (base_donne === 'Etudiant') {
        a('/accueil étudiant');
      }
    
    if (base_donne === 'Gerant') {
        a('/');
      }

    if (base_donne === 'Employé') {
        a('/');
      }

    if (base_donne === 'Administrateur') {
        a('/');
      }
    
};