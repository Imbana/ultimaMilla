import "./chart.css";
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


const scores = [60, 50, 50, 30, 40, 60, 40, 50];
const scoresNoEntregados = [2, 3, 0, 1, 2, 5];
const labels = ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6'];




export default function Chart({ title, dataKey, grid }) {
    const data = useMemo(() => {
        return {
            datasets: [
                {
                    label: 'Entregados',
                    data: scores,
                    borderColor: '#1d9d03',
                    backgroundColor: '#118b0663',
                    tension:0.3,
                    pointStyle: 'circle',
                    pointRadius: 8,
                    pointHoverRadius: 12
                },
                {
                    label: 'No entregados',
                    data: scoresNoEntregados,
                    borderColor: '#ff0404',
                    backgroundColor: '#ff040463',
                    tension:0.3,
                    pointStyle: 'circle',
                    pointRadius: 8,
                    pointHoverRadius: 12
                },
                {
                    label: 'Sin gestionar',
                    data: [10, 20, 15, 15, 25, 32, 14, 15],
                    borderColor: '##b402ca',
                    backgroundColor: '##b40263',
                    tension:0.3,
                    pointStyle: 'circle',
                    pointRadius: 8,
                    pointHoverRadius: 12
                },
                {
                    label: 'Gestionadas',
                    data: [40, 40, 20, 25, 30, 50, 20, 40],
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
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <Line options={options} data={data} />
    </div>
  );
}
