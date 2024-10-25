import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reclamation_style.css';
import {  useNavigate } from 'react-router-dom';



const Liste_reclamation = () => {
    const provenance=[" ", " ", " "];
    const propos=["", "", ""];
    const etat=["", "", ""];

    const modifier=useNavigate();
    const com_modif=()=>{
        modifier('/description reclamation')
    }

    

    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
                
                <table style={{borderCollapse:'collapse', width:'80%', background:'#ffffff', color:'#000'}}>
                    <thead>
                        <tr >
                            <th>provenance</th>
                            <th>Propos</th>
                            <th>Etat</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {provenance.map((provenance, i)=>(
                        <tr key={i}>
                            <td >{provenance}</td>
                            <td >{propos[i]}</td>
                            <td >{etat}</td>
                            <td>
                                <button style={{background:'#11AF18', color:'#fff', borderRadius:'25px'}} onClick={com_modif}>
                                    Repondre
                                </button>
                                <button style={{background:'#F90A0A', color:'#fff', borderRadius:'25px'}}>Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </table>
            
           
        </div>
      
    );
};

export default Liste_reclamation;