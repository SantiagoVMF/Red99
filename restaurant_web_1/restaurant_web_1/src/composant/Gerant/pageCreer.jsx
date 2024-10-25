import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Side_bar from "./side-bar-gerant";
import Entete_g from "./entete-gerant";
import InfoCompte from './infoCompte';




const PageCreer = () => {
    const test='GESTION DES EMPLOYES';
    return (
        <div style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
           
           <Side_bar/>
           
           <div style={{ textAlign:'center',flex:1,
            color:'#ffffff', fontFamily:'times new roman',  alignItems:'center'}}>
                <Entete_g/>
                <InfoCompte/>
            
            
           </div>
              

        </div>
      
    );
};

export default PageCreer;