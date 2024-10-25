import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InfoCompte = () => {
    const [sex, setSex] = useState('');
    const [poste, setPoste] = useState('');
    const [etat, setEtat] = useState('');

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Met à jour l'état approprié en fonction de l'input qui a été modifié
        if (name === 'sex') {
            setSex(value);
        } else if (name === 'poste') {
            setPoste(value);
        } else if (name === 'etat') {
            setEtat(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const motdepasse = event.target.motdepasse.value;
        // const motConfig = event.target.motConfig.value;
    
        // // Vérifiez si le mot de passe et la confirmation sont identiques
        // if (motdepasse !== motConfig) {
        //     alert("Le mot de passe et la confirmation ne correspondent pas !");
        //     return;  // Empêche l'envoi des données si la validation échoue
        // }

        // const userData = {
            const nom_prenom = event.target.nom_prenom?.value;
            const numero = event.target.numero?.value;
            const email = event.target.email?.value;
            const email_config = event.target.EmailRecup?.value;
            const motdepasse = event.target.motdepasse?.value;
            const mot_config = event.target.motConfig?.value;
            const sexe = sex;
            const userPoste = poste;
            const userEtat = etat;
        // };

    
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/registerAdmin', {
                nom_prenom,
                email,
                motdepasse,
                numero,
                EmailRecup: email_config,
                motdepasse_confirmation: mot_config,
                sex: sexe,
                poste: userPoste,
                etat: userEtat
            });
            console.log('Réponse du backend:', response.data);
            alert('Compte créé avec succès!');
            navigate('/accueiladmin');    // Rediriger l'utilisateur vers l'accueil
        } catch (error) {
            console.error('Erreur lors de la création du compte:', error.response.data);
            if (error.response) {
                alert("Une erreur s'est produite : " + error.response.data.message || "Erreur inconnue");
            } else {
                alert("Une erreur s'est produite lors de la connexion au serveur");
            }
        }
    };

    const retour = useNavigate();

    const fonction_retour = () => {
        retour('/gestionEmploie');
    };

    return (
        <div className='container' style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', gap: '30px', flexWrap: 'wrap', paddingTop: '50px', width: '80%' }}>
            <h5>Information du compte</h5>
            <hr style={{ height: '10px' }} />

            <div>
                <form onSubmit={handleSubmit} style={{ textAlign: 'left', color: '#000' }}>
                    <div className="form-group">
                        <label htmlFor="nom_prenom">Nom & Prenom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom_prenom"
                            name="nom_prenom"
                            placeholder="Entrer votre nom et prenom"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero">Numéro téléphone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="numero"
                            name="numero"
                            placeholder="00- 0 00 00 00 00"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Adresse Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Entrer votre email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmailRecup">Adresse Email de récupération</label>
                        <input
                            type="email"
                            className="form-control"
                            id="EmailRecup"
                            name="EmailRecup"
                            placeholder="Entrer votre Email de récupération"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="motdepasse">Mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            id="motdepasse"
                            name="motdepasse"
                            placeholder="Entrer votre mot de passe"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="motConfig">Confirmer le mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            id="motConfig"
                            name="motConfig"
                            placeholder="Confirmer le mot de passe"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sex">Sexe</label>
                        <select
                            id="sex"
                            name="sex"
                            className="form-control"
                            value={sex}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Sélectionnez votre sexe</option>
                            <option value="1">Masculin</option>
                            <option value="2">Féminin</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="poste">Poste</label>
                        <select
                            id="poste"
                            name="poste"
                            className="form-control"
                            value={poste}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Sélectionnez le poste</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="etat">État</label>
                        <select
                            id="etat"
                            name="etat"
                            className="form-control"
                            value={etat}
                            onChange={handleChange}
                            required
                        >
                            <option value="">État de création</option>
                            <option value="1">Fonctionnel</option>
                            <option value="2">Bloqué</option>
                        </select>
                    </div>

                    <div style={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
                        <button type="submit" className="btn btn-warning btn-block" style={{ background: '#11af18' }}>
                            Valider
                        </button>
                        <button type='button' className="btn btn-warning btn-block" onClick={fonction_retour} style={{ background: '#f90a0a' }}>
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoCompte;
