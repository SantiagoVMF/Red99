import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../../image/dd.png';
import images2 from '../../image/logos.jpg';
import { Link } from 'react-router-dom';

const Barre = () => {
    const [nom_admin, setNomAdmin] = useState();
    
    useEffect(() => {
        // Récupérer les informations de l'utilisateur du localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Si l'utilisateur est défini, mettre à jour le nom de l'admin
        if (user && user.name) {
            setNomAdmin(user.name);
        }
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="d-flex flex-column" style={{ background: '#000000', color: "#cfbd97", width: "250px", height: '100vh', fontFamily: 'Times New Roman', textAlign: 'center' }}>
            <div className="p-3">
                <img src={images} alt='photo administrateur' style={{ height: '150px', width: '150px', borderRadius: '50%' }} />
                <h4>{nom_admin}</h4>
            </div>

            <nav className='navbar flex-grow-1' style={{ background: "#000000" }}>
                <ul className="navbar-nav flex-column justify-content-between" style={{ height: '100%' }}>
                    <li className="nav-item">
                        <Link className='nav-link' style={{ color: "#cfbd97" }} to="/accueiladmin">ACCUEIL</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gestionEmploie" style={{ color: "#cfbd97" }}>GESTION DES EMPLOYES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gestionMenu" style={{ color: "#cfbd97" }}>GESTION DE MENU</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stats" style={{ color: "#cfbd97" }}>STATISTIQUES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/accueil_jeu" style={{ color: "#cfbd97" }}>PROMO & JEUX</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/accueil reclamation' style={{ color: "#cfbd97" }}>GESTION DES RECLAMATIONS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" style={{ color: "#cfbd97" }}>PARAMETRES</Link>
                    </li>
                </ul>
            </nav>

            <div className="p-3" style={{ background: '#000000' }}>
                <Link className="nav-link" to="/deconnecter" style={{ color: "#cfbd97" }}>DECONNECTER</Link>
                <img src={images2} alt='photo restaurant' style={{ height: '175px', width: '175px', borderRadius: '50%' }} />
            </div>
        </div>
    );
};

export default Barre;