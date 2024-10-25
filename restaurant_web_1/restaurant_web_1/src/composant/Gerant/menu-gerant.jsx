import React from "react"
import Gerant_com from './gerant-commande.js'
import img1 from './supervision.jpg'
import { BrowserRouter as Router, Route, Switch, Link, Routes, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Menu_g = () => {

    const navigate  = useNavigate();
    
    const click_sup = () => {
        navigate('/gerant_commande');
    }
    const click_emploie = () => {
        navigate('/gerant_employe');
    }
    const click_reclam = () => {
        navigate('/gerant_reclamation');
    }
    const click_stat = () => {
        navigate('/gerant_satistique');
    }

    // const beau = { j };
    const butt1 = {height:90, width:300, backgroundImage:'url(${img1})', backgroundSize: 'cover', backgroundPosition:'center', borderRadius:20, transition: 'transform 0.3s',}
    const butt2 = {height:90, width:300, backgroundImage:'url(${img1})', backgroundSize: 'cover', backgroundPosition:'center', borderRadius:20, transition: 'transform 0.3s',}
    const butt3 = {height:90, width:300, backgroundImage:'url(${img1})', backgroundSize: 'cover', backgroundPosition:'center', borderRadius:20, transition: 'transform 0.3s',}
    const butt4 = {height:90, width:300, backgroundImage:'url(${img1})', backgroundSize: 'cover', backgroundPosition:'center', borderRadius:20, transition: 'transform 0.3s',}

    return (
        
            <div className="container " >
                <div className="row" style={{display:'flex',flexWrap:'wrap',justifyContent:'center', alignItems:'center',gap:20,paddingTop:36}}>
                    <div className="col-6">
                        <button style={butt1} onClick={click_sup} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>SUPERVISION DES COMMNADES</button>
                    </div>
                    <div className="col-6">
                        <button style={butt2} onClick={click_emploie} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>GESTION DES EMPLOYES</button>
                    </div>
                    <div className="col-6">
                        <button style={butt3} onClick={click_reclam} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>GESTION DES RECLAMATIONS</button>
                    </div>
                    <div className="col-6">
                        <button style={butt4} onClick={click_stat} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>STATISTIQUES</button>
                    </div>
                </div>
            </div>
        
    )

}


export default Menu_g;