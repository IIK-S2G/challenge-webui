'use client'

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
import { Line } from 'react-chartjs-2';
import randomColor from '@/utils/scoreboard/randomColor';
import EnhanceData from '@/utils/scoreboard/enhanceData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart(props: LineChartProps | MultiLineChartProps) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            }
        }
    };

    let data

    if (Array.isArray(props.dataset[0])) {
        const multiLineProps = props as MultiLineChartProps
        const datasets: DatasetEntryProps[] = []
        const labels: string[] = []

        for (let i = 0; i < multiLineProps.labels.length; i++) {
            for (let j = 0; j < multiLineProps.labels[i].length; j++) {
                labels.push(multiLineProps.labels[i][j])
            }
        }
       
        for (let i = 0; i < multiLineProps.label.length; i++) {
            let color = randomColor()
            datasets.push({
                label: multiLineProps.label[i],
                labels: multiLineProps.labels[i],
                data: multiLineProps.dataset[i],
                borderColor: color.rgb,
                backgroundColor: color.rgba
            })
        }

        data = EnhanceData(labels, datasets)

    } else {
        const lineProps = props as LineChartProps
        data = {
            labels: lineProps.labels,
            datasets: [{
                label: lineProps.label,
                data: lineProps.dataset,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }],
        };
    }

    return (
        <div className={`${props.className ? props.className : 'grid place-items-center m-5'}`}>
            <Line options={options} data={data}/>
        </div>
    )
}
