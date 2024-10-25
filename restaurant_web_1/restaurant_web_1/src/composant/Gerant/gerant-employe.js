import React from "react";

import Side_bar from "./side-bar-gerant";
import Entete_g from "./entete-gerant";
import Liste from "./listeEmploie";
import InfoEmploie from "./infoEmploie";

const Gerant_employe = () => {

    return (

        <div style={{display:'flex', textAlign:'center',height:'100%' }}>
            <Side_bar/>
            <div style={{flex:1,textAlign:'center', alignItems:'center',height:'100%', backgroundColor:'linear-gradient(315deg, #000000, #cfbd97)'}}>
                <div>
                    <Entete_g/>
                </div>
                <div>
                    <InfoEmploie/>
                    <Liste></Liste>
                </div>
            </div>
        </div>

    );

}

export default Gerant_employe;