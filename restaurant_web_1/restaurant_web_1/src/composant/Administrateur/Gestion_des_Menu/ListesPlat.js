import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menustyle.css';
import {  useNavigate } from 'react-router-dom';



const ListePlat = () => {
    const nom_plat=["riz", "spaquettie", "viande"];
    const quantite=[1, 2, 1];
    const prix=[1500, 2000, 1000];

    const modifier=useNavigate();
    const com_modif=()=>{
        modifier('/detail_menu')
    }

    

    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
                
                <table style={{borderCollapse:'collapse', width:'80%', background:'#ffffff', color:'#000'}}>
                    <thead>
                        <tr >
                            <th>Nom du plat</th>
                            <th>Qauntité</th>
                            <th>Prix (CFA)</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {nom_plat.map((nom_plat, i)=>(
                        <tr key={i}>
                            <td >{nom_plat}</td>
                            <td >{quantite[i]}</td>
                            <td >{prix[i]}</td>
                            <td>
                                <button style={{background:'#11AF18', color:'#fff', borderRadius:'25px'}} onClick={com_modif}>
                                    Modifier
                                </button>
                                <button style={{background:'#F90A0A', color:'#fff', borderRadius:'25px'}}>Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </table>
            
           
        </div>
      
    );
};

export default ListePlat;