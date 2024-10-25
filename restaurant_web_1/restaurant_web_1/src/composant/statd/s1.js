// import React from 'react';
// import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

// const MyVictoryLineChart = () => {
//   // Données à représenter
//   const data = [
//     { x: 'Jan', y: 30 },
//     { x: 'Feb', y: 20 },
//     { x: 'Mar', y: 50 },
//     { x: 'Apr', y: 40 },
//     { x: 'May', y: 70 },
//   ];

//   return (
//     <VictoryChart theme={VictoryTheme.material}>
//       <VictoryAxis 
//         label="Mois"
//         style={{
//           axisLabel: { padding: 30 },
//         }}
//       />
//       <VictoryAxis 
//         dependentAxis 
//         label="Ventes"
//         style={{
//           axisLabel: { padding: 40 },
//         }}
//       />
//       <VictoryLine 
//         data={data} 
//         style={{
//           data: { stroke: '#c43a31' },
//           parent: { border: '1px solid #ccc' }
//         }}
//       />
//     </VictoryChart>
//   );
// };

// export default MyVictoryLineChart;


import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

const MyAdvancedVictoryChart = () => {
  const data1 = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 20 },
    { x: 'Mar', y: 50 },
    { x: 'Apr', y: 40 },
    { x: 'May', y: 70 },
    { x: 'juin', y: 70 }
  ];

  const data2 = [
    { x: 'Jan', y: 45 },
    { x: 'Feb', y: 10 },
    { x: 'Mar', y: 80 },
    { x: 'Apr', y: 60 },
    { x: 'May', y: 90 },
  ];

  return (
    <div style={{ width: '300px', height: '200px' }}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis label="Mois" 
        style={{
          axisLabel: { padding: 30 },
          ticks: { stroke: 'grey' },
          tickLabels: { fontSize: 10 },
        }}
        />
        <VictoryAxis dependentAxis label="Ventes" 
        style={{
          axisLabel: { padding: 40 },
          ticks: { stroke: 'grey' },
          tickLabels: { fontSize: 10 },
        }}
        />
        <VictoryLine data={data1} style={{ data: { stroke: '#c43a31' } }} />
        <VictoryLine data={data2} style={{ data: { stroke: '#0000ff' } }} />
      </VictoryChart>
    </div>
  );
};

export default MyAdvancedVictoryChart;