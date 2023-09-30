'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({dataset, label, labels}: {dataset: number[], label: string, labels: string[]}): JSX.Element {
    const data = {
        labels: labels,
        datasets: [
          {
            label: label,
            data: dataset,
            backgroundColor: ['#228B22', '#D2042D'],
            borderWidth: 0,
          },
        ],
    }

    return(
        <div className='h-[200px] grid place-items-center m-5'>
            <Doughnut data={data} />
        </div>
    )
}
