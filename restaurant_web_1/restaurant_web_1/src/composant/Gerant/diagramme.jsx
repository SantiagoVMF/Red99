import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

const Diagramme = () => {
  const data1 = [
    { x: 'Janvier', y: 15 },
    { x: 'Frévrier', y: 10 },
    { x: 'Mars', y: 90 },
    { x: 'Avril', y: 40 },
    { x: 'Mai', y: 50 },
    { x: 'Juin', y: 45 },
    { x: 'Juillet', y: 36 },
    { x: 'Aout', y: 70 },
    { x: 'Septembre', y: 0 },
    { x: 'Octobre', y: 0 },
    { x: 'Novembre', y: 0 },
    { x: 'Decembre', y: 200 },
  ];

  const data2 = [
    { x: 'Janvier', y: 7089 },
    { x: 'Frévrier', y: 10000 },
    { x: 'Mars', y: 80 },
    { x: 'Avril', y: 60000 },
    { x: 'Mai', y: 0 },
    { x: 'Juin', y: 0 },
    { x: 'Juillet', y: 900 },
    { x: 'Aout', y: 1234 },
    { x: 'Septembre', y: 0 },
    { x: 'Octobre', y: 50000 },
    { x: 'Novembre', y: 0 },
    { x: 'Decembre', y: 0 },

  ];

  return (
    <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',width:'800px', height:'380px',
        textAlign: 'center', display: 'flex',  gap: '10px', flexWrap: 'wrap', paddingTop:'5px', background:'#ffffff' }} >

            
        
            <VictoryChart theme={VictoryTheme.material}
                width={900}
                height={500}
            >
                <VictoryAxis label="Date" 
                style={{
                axisLabel: { padding: 20, fontFamily:'times new roman', fontSize:'11px'},
                ticks: { stroke: '#000' },
                tickLabels: { fontSize: 7 },
                
                }}
                />
                <VictoryAxis dependentAxis label="Gain" domain={[0,200000]}
                tickValues={[0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000,
                  100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000,
                  200000]} 
                style={{
                axisLabel: { padding: 40 , fontFamily:'times new roman', fontSize:'11px'},
                ticks: { stroke: '#000' },
                tickLabels: { fontSize: 7 },
                }}
                />

                {/* <VictoryAxis
                  dependentAxis domain={[0,300]}
                  tickValues={[0,50,100,150,300]}
                  orientation="right"
                  tickFormat={(t) => `${t}`}
                  label="Quantité"
                  style={{
                    axisLabel: { padding: 40 },
                    tickLabels: { fontSize: 10, padding: 5 }
                  }}
                /> */}

                <VictoryLine data={data1} style={{ data: { stroke: '#0000ff' } }} />
                <VictoryLine data={data2} style={{ data: { stroke: '#c43a31' } }} />  
                
            </VictoryChart>
        
    
    </div>
  );
};

export default Diagramme;