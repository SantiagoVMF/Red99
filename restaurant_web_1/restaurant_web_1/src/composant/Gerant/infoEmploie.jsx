import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';




const InfoEmploie = () => {

    const navigate = useNavigate();
    const com_modif=()=>{
        navigate('/page_creer')
    }
   
    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
           
           <div style={{display:'flex', width:'80%'}}>
                <h4 style={{width:'80%', textAlign:'left'}}>Les comptes des Personnels</h4>
                <button style={{border:'none', background:'#cfbd97'}} onClick={com_modif}>
                    Ajouter un compte
                </button>

           </div>


        </div>
      
    );
};

export default InfoEmploie;