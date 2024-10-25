import React, { useState } from 'react';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import Contenu_menu from './Contenu_menu';



const CreerMenu = () => {
    const test='GESTION DU MENU';
    return (
        <div style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
           
           <Barre/>
           
           <div style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center'}}>
            <Entete text={test}/>
            <Contenu_menu/>
            
            
           </div>
              {/* <PiedAdmin/>     */}
        </div>
      
    );
};

export default CreerMenu;