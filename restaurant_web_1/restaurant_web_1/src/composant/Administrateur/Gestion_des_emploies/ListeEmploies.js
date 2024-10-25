import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleListe.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Liste = () => {
    // Définir un état pour stocker la liste des employés
    const [employees, setEmployees] = useState([]);
    
    // Hook pour gérer la navigation
    const navigate = useNavigate();

    // Fonction pour récupérer les employés depuis l'API
    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/employees');  // URL du backend Laravel
            setEmployees(response.data.employees);  // Mettre à jour l'état avec les employés récupérés
        } catch (error) {
            console.error('Erreur lors de la récupération des employés:', error);
        }
    };

    // Utilisation de useEffect pour récupérer les employés au chargement du composant
    useEffect(() => {
        fetchEmployees();
    }, []);

    // Fonction de redirection pour modifier un employé
    const handleModify = () => {
        navigate('/page_creer');
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/api/employees/${id}`);
                console.log('Réponse de l\'API:', response.data); // Ajouté pour débogage
                setEmployees(employees.filter(employee => employee.id !== id));
                alert('Employé supprimé avec succès !');
            } catch (error) {
                console.error('Erreur lors de la suppression de l\'employé:', error.response.data); // Affiche l'erreur détaillée
                alert('Une erreur s\'est produite lors de la suppression de l\'employé : ' + (error.response.data.message || 'Erreur inconnue.'));
            }
        }
    };
    

    return (
        <div className='container' style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            paddingTop: '50px'
        }}>
            <table style={{ borderCollapse: 'collapse', width: '80%', background: '#ffffff', color: '#000' }}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Poste</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Parcourir la liste des employés et afficher chaque employé */}
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.role}</td>
                            <td>
                                <button style={{ background: '#11AF18', color: '#fff', borderRadius: '25px' }} onClick={handleModify}>
                                    Modifier
                                </button>
                                <button style={{ background: '#F90A0A', color: '#fff', borderRadius: '25px' }} onClick={() => handleDelete(employee.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Liste;
