import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import PiedAdmin from '../Pied_Admin';
import InfoMenu from './InfoMenu';
import ListePlat from './ListesPlat';



const GestionMenu = () => {
    const test='GESTION DU MENU';
    return (
        <div style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
           
           <Barre/>
           
           <div style={{ textAlign:'center',flex:1,
            color:'#ffffff', fontFamily:'times new roman', alignItems:'center'}}>
                <Entete text={test}/>
                <InfoMenu/>
                <ListePlat/>
            
            
           </div>
              {/* <PiedAdmin/>     */}
        </div>
      
    );
};

export default GestionMenu;
