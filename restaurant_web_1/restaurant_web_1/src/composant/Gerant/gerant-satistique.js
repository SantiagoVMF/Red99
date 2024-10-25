import React from 'react';

import Side_bar from "./side-bar-gerant";
import Entete_g from "./entete-gerant";

import Diagramme from './diagramme';
// import ContenuStatistique from './ContenuStatistique';
import Type_Diagramme from './typeDiagramme';



const Statistique = () => {
    const test='STATISTIQUES';

    return (

            <div style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center'}}>
                
                <section style={{background:'#cfbd97', display:'flex'}}>
                    <div style={{width:'90%'}}>
                        <h5>Les Statisques </h5>
                        <Diagramme/>
                    </div>
                    <Type_Diagramme/>

                </section>
            
            </div>
            
    );
};

export default Statistique;