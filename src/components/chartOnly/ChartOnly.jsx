import "./chartOnly.css";
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useMemo } from 'react';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
}


const labels = ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6'];


export default function ChartOnly({ title, dataKey, grid }) {
    const data = useMemo(() => {
        return {
            datasets: [
                {
                    label: 'Gestionadas',
                    data: [4, 4, 2, 2, 3, 5, 2, 4],
                    borderColor: '#001bff',
                    backgroundColor: '#0053ff63',
                    tension:0.3,
                    pointStyle: 'circle',
                    pointRadius: 8,
                    pointHoverRadius: 12
                },
            ],
            labels,
        };
    }, []);
  return (
    <div className="chartOnly">
      <Line height="100" options={options} data={data} style={{width:"90%", margin:"0px auto"}}/>
    </div>
  );
}
