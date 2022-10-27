import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function Statistics({ priceDate, marketPrice }) {
    console.log('Show me what "this" is:', this);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const labels = priceDate

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                // data: [6, 8, 12, 5, 7, 16, 9],
                data: marketPrice,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            // {
            //     label: 'Dataset 2',
            //     data: [6, 8, 12, 5, 7, 16, 9],
            //     borderColor: 'rgb(53, 162, 235)',
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    };

    return <Line options={options} data={data} />;
}
