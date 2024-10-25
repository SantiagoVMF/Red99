import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';





const InfoCompte = () => {

    const [sex, setSex] = useState('');
    const [poste, setposte] = useState('');
    const [etat, setEtat] = useState('');

    const handleChange = (event) => {
        setSex(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
      };

    const retour=useNavigate();
    
    const fonction_retour=()=>{
        retour('/gestionEmploie')
    }
   
    
    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        textAlign: 'center',   gap: '30px', flexWrap: 'wrap', paddingTop:'50px', width:'80%'}} >
            
            <h5>Information du compte</h5>
            <hr style={{height:'10px'}}/>
        
            <div >
            <form onSubmit={handleSubmit} style={{textAlign:'left',color:'#000'}}>
                        <div className="form-group" >
                                <label htmlFor="nom_prenom">Nom & Prenom</label>
                                <input
                                    type="nom_prenom"
                                    className="form-control"
                                    id="nom_prenom"
                                    name="nom_prenom"
                                    placeholder="Entrer votre nom et prenom"
                                    required
                                />
                            </div>
                            <div className="form-group" >
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
                            
                            <div className="form-group" >
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
                            <div className="form-group" >
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
                            <div className="form-group" >
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
                            <div className="form-group" >
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
                            <div className="form-group" >
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
                            
                            <div className="form-group" >
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
                                    <option value="1">Gerant</option>
                                    <option value="2">Employé</option>
                                </select>
                            </div>
                            
                            <div className="form-group" >
                                <label htmlFor="poste">Etat</label>
                                <select
                                    id="etat"
                                    name="etat"
                                    className="form-control"
                                    value={etat}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Etat de création</option>
                                    <option value="1">Fonctionnel</option>
                                    <option value="2">Bloquer</option>
                                </select>
                            </div>
                            
                            <div style={{justifyContent:'center', display:'flex', width:'100%'}}>
                                <button type="submit" className="btn btn-warning btn-block" style={{background:'#11af18'}}>
                                    Valider
                                </button>
                                <button type='cancle' className="btn btn-warning btn-block" onClick={fonction_retour} 
                                    style={{background:'#f90a0a'}}
                                >
                                    Annuler
                                </button>
                            </div>

                            
                </form>

            </div>


        </div>
      
    );
};

export default InfoCompte;