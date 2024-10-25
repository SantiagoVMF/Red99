import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import PiedAdmin from '../Pied_Admin';
import Diagramme from './Diagramme';
import Type_Diagramme from './TypeDiagramme';



const ContenuStatistique = () => {
    const test='STATISTIQUES';
    return (
        <div style={{background: '#cfbd97', textAlign:'center', height:'100%'}}>
                
            <Entete text={test}></Entete>
            <section style={{background:'#cfbd97', display:'flex'}}>
                <div style={{width:'80%'}}>
                    <h5>Statisques de ...</h5>
                    <Diagramme/>
                </div>

                <Type_Diagramme/>
            </section>

            
                    
        </div>
      
    );
};

export default ContenuStatistique;