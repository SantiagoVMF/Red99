import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Entete_g = () =>{

    return (
    
            <div className="" style={{ 
                    
                    background: 'linear-gradient(90deg, #000000, #000000, #cfbd97)', // Dégradé de bleu à vert
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    display: 'flex',
                    flexDirection:'column',
                    margin: 0
                    
                }}>
                <h2>GERANT DU RESTAURANT</h2>
                <h4>- Acceuil -</h4>
            </div>
        
    )

}

export default Entete_g;