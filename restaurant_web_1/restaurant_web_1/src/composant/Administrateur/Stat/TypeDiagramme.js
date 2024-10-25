import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import PiedAdmin from '../Pied_Admin';
import Diagramme from './Diagramme';

const Type_Diagramme = () => {
    

    return (
        <div  style={{background: 'linear-gradient(90deg, #999999, #cfbd97)', textAlign:'left',
            color:'#ffffff', fontFamily:'times new roman', width:'275px',height:'300', alignItems:'center'}}>
                <h4 style={{textAlign:'center'}}>Legendes</h4>
                <hr/>

                <section>
                    <button style={{background:'blue', height:'18px', width:'25px'}}></button>                    
                    <button style={{border:'none', background:'none'}}>Statisques de Commande</button>
                </section>
                
                <section>
                    <button style={{background:'green', height:'18px', width:'25px'}}></button> 
                    <button style={{border:'none', background:'none'}}>Statisques de Vente</button>
                </section>
                
                <section>
                    <button style={{background:'orange', height:'18px', width:'25px'}}></button> 
                    <button style={{border:'none', background:'none'}}>Statisques de Jeux & Promos</button>
                </section>
                
                <section>
                    <button style={{background:'red', height:'18px', width:'25px'}}></button>
                    <button style={{border:'none', background:'none'}}>Statisques de prainnage & fidélité</button>
                </section>
                

        </div>
    );
};

export default Type_Diagramme;