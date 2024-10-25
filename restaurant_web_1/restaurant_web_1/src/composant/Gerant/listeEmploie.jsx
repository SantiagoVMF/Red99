import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styleListe.css';
import {  useNavigate } from 'react-router-dom';



const Liste = () => {
    const noms=["Nehemie Mouga", "Santigo", "Marrion"];
    const adresse=["djindigam.mouga@2028.ucac-icam.com", "santigo@2028.ucac-icam.com", "will.marrion@2028.ucac-icam.com"];
    const poste=["Gerant", "emploie", "emploie"];

    const navigate = useNavigate();
    const com_modif=()=>{
        navigate('/page_creer')
    }

    

    return (
        <div className='container' style={
            {justifyContent: 'center',
             alignContent: 'center',
             alignItems: 'center',
            textAlign: 'center',
             display: 'flex', 
             gap: '30px',
            flexWrap: 'wrap', 
            paddingTop:'50px',
        }
            } >
                
                <table style={{borderCollapse:'collapse', width:'80%', background:'#ffffff', color:'#000'}}>
                    <thead className='sty'>
                        <tr  className='sty'>
                            <th className='sty'>Nom</th>
                            <th className='sty'>Adresse</th>
                            <th className='sty'>Poste</th>
                            <th className='sty'>Action</th>
                        </tr>
                    </thead>

                    {noms.map((noms, i)=>(
                        <tr key={i} className='sty'>
                            <td  className='sty'>{noms}</td>
                            <td  className='sty'>{adresse[i]}</td>
                            <td  className='sty'>{poste[i]}</td>
                            <td className='sty'>
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

export default Liste;