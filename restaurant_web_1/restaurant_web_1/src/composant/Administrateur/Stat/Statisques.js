import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import PiedAdmin from '../Pied_Admin';
import Diagramme from './Diagramme';
import ContenuStatistique from './ContenuStatistique';
import Type_Diagramme from './TypeDiagramme';



const Statistique = () => {
    const test='STATISTIQUES';

    return (
        <div style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
            <Barre />


            <div style={{ textAlign:'center',flex:1, color:'#ffffff', fontFamily:'times new roman', alignItems:'center'}}>
                
                <Entete text={test}></Entete>
                
                <section style={{background:'#cfbd97', display:'flex'}}>
                    <div style={{width:'80%'}}>
                        <h5>Les Statisques </h5>
                        <Diagramme/>
                    </div>
                    <Type_Diagramme/>

                </section>
            
            </div>
            

        </div>
    );
};

export default Statistique;