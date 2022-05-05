import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, Tooltip, Legend);


export const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x:{
          min:1,
          max:24
      }
    },
  };
// 'rgba(53, 162, 235, 0.5)' 
  export const data = {
    datasets: [
      {
        label: 'Rutas terminadas',
        data: [{x:1,y:0,r:5},{x:3,y:1,r:5},{x:4,y:0,r:5},{x:18,y:1,r:5},{x:14,y:1,r:5},{x:10,y:1,r:5}],
        backgroundColor:function(context){
            console.log(context.raw.y);
            if(context.raw.y === 1){
                return 'rgba(53, 162, 235, 0.5)'
            }
            return 'rgba(255, 99, 132, 0.5)'
        },
      }
    ],
  };

const BubbleChart = () => {
  return (
    <div>
        BubbleChart
        <Bubble options={options} data={data} style={{width:"90%", height:"280px", margin:"0px auto"}}/>
    </div>
  )
}

export default BubbleChart