import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

import Gerant_com from "./gerant-commande";

import Entete_g from "./entete-gerant";
import Menu_g from "./menu-gerant";
import Side_bar from "./side-bar-gerant";

const Gerant_accueil = () => {
    return (

        <div style={{display:'flex', textAlign:'center',height:'100%' }}>
            <Side_bar/>
            <div style={{flex:1,textAlign:'center', alignItems:'center',height:'100%', backgroundColor:'linear-gradient(315deg, #000000, #cfbd97)'}}>
                <div>
                    <Entete_g/>
                </div>
                <div>
                    <Menu_g/>
                </div>
            </div>
        </div>

    );
}

export default Gerant_accueil;
