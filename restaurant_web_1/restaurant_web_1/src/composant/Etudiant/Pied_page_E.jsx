import React from 'react';
import logo from '../../image/logos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Pied_page_E = () => {
    return (
        <footer 
            style={{ 
                background: '#cfbd97',
                height: '70px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                listStyle: "none" 
            }}
        >
            <div className="container-fluid" style={{listStyle: "none", color:'black' }}>
                <ul 
                    style={{ 
                        width: '100%', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        fontFamily: 'Times New Roman', 
                        color: 'black', listStyle: "none", alignItems:'center', fontSize:'20px' 
                    }}
                >
                    <li className="nav-item">
                        <Link className='nav-link'   to="#">Jeux & Promos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link'   to="#">Historique</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link'  to='/accueil etudiant'>Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link'  to="#">
                            <img src={logo} alt='Logo' style={{ 
                                width: '70px',      
                                height: '70px', 
                                borderRadius: '50%' 
                            }} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link'  to='/service etudiant'>Réclamation</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link'   to="#">Parrainage</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link'  to="/A propos etudiant">Profil</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Pied_page_E;