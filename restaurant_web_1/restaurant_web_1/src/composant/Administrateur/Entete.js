import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Entete = ({text}) => {
    return (
        <div style={{background: 'linear-gradient(90deg, #000000, #cfbd97)', textAlign:'center',
            color:'#ffffff', fontFamily:'times new roman', height:'150px', alignItems:'center', width:'100%'}}>
            
            <h2 style={{paddingTop:'15px'}}>{text}</h2>
            <h2 style={{paddingTop:'15px'}}>RESTAURANT MIAM MIAM</h2>
            
        </div>
    );
};

export default Entete;
