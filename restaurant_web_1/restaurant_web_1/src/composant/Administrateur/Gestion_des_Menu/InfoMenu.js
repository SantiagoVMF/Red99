import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';




const InfoMenu = () => {

    const a=useNavigate();

    const ajout=()=>{
        a('/detail_menu')
    }
   
    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
           
           <div style={{display:'flex', width:'80%'}}>
                <h4 style={{width:'80%', textAlign:'left'}}>Liste des Menus</h4>
                <button style={{border:'none', background:'#cfbd97'}} onClick={ajout}>
                    Ajouter un plat
                </button>

           </div>


        </div>
      
    );
};

export default InfoMenu;