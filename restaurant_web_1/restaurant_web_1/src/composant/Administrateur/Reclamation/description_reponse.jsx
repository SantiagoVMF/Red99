import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';



const Description_reclamation = () => {
    
    const nom='......'
    const objet='....'
    const descrip='....'
    

    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',fontSize:'16px',
            textAlign: 'center',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >

               <h4>Message de reclamation</h4> 
               
               <div style={{width:'100%', background:'#fff', color:'#000', height:'300px', textAlign:'justify'}}>
                    <div className='container' style={{display:'flex',justifyContent:'space-between', width:"100%", textAlign:'center'}}>
                        <p>Provenant de: {nom}</p>
                        <p>Objet:{objet} </p>
                    </div>
                    <hr style={{background:'#000'}}></hr>
                    <p style={{paddingLeft:'30px'}}>{descrip}</p>
               </div>
               <div>
                    <button style={{background:'linear-gradient(90deg, #000000, #cfbd97)', color:'#fff', borderRadius:'10px',
                         width:'200px', height:'50px', margin: '20px 20px'}}>
                        Réjetter
                    </button>
                    <button style={{background:'linear-gradient(90deg, #000000, #cfbd97)', color:'#fff', borderRadius:'10px', 
                        width:'200px', height:'50px', margin: '20px 20px'}}>
                        Valider réclamation
                    </button>
               </div>
                
           
        </div>
      
    );
};

export default Description_reclamation;