import React from "react";
import moment from 'moment';
import { useState, useEffect } from 'react';
import { Tableau } from "./menu-g-com";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Entete_g from "./entete-gerant";
import Side_bar from "./side-bar-gerant";

const Gerant_com = () => {

    //Composant pour gerer les dates et heures
    const DateTimeExample = () => {
        const [currentDateTime, setCurrentDateTime] = useState(moment());
    
        useEffect(() => {
            const timer = setInterval(() => {
                setCurrentDateTime(moment()); // Met à jour la date et l'heure chaque seconde
            }, 1000);
    
            return () => clearInterval(timer); // Nettoie l'intervalle à la désinstallation
        }, []);
    
        // Exemple d'ajout de jours, d'heures ou de minutes
        const twoDaysLater = currentDateTime.clone().add(2, 'days');
        const threeHoursLater = currentDateTime.clone().add(3, 'hours');
    
        return (
            <div>
                <h3> {currentDateTime.format('DD/MM/YYYY     HH:mm:ss')}</h3>
                {/* <p>Dans deux jours : {twoDaysLater.format('DD/MM/YYYY HH:mm:ss')}</p>
                <p>Dans trois heures : {threeHoursLater.format('DD/MM/YYYY HH:mm:ss')}</p> */}
            </div>
        );
    };

    return (

        <div style={{display:'flex',height:'100%' }}>
            <Side_bar/>
            <div style={{flex:1, alignItems:'center',height:'100%', backgroundColor:'linear-gradient(315deg, #000000, #cfbd97)'}}>
                <div>
                    <Entete_g/>
                </div>
                <div style={{padding:40,}}>
                    <h2 style={{textAlign:'center'}}>SUIVIE DES COMMANDES EN TEMPS REEL</h2>
                    <section >
                        <h4>Commandes du jour :</h4>
                        <DateTimeExample/>
                    </section>
                    <Tableau></Tableau>
                </div>
            </div>
        </div>

    );
}

export default Gerant_com;