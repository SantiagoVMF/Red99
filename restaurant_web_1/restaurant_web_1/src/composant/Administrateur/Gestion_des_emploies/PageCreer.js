import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import InfoCompte from './InfoCompte';




const PageCreer = () => {
    const test='GESTION DES EMPLOYES';
    return (
        <div style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
           
           <Barre/>
           
           <div style={{ textAlign:'center',flex:1,
            color:'#ffffff', fontFamily:'times new roman',  alignItems:'center'}}>
                <Entete text={test}/>
                <InfoCompte/>
            
            
           </div>
              

        </div>
      
    );
};

export default PageCreer;