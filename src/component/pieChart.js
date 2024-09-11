import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ data, title }) => (
    <div className="pie-chart">
        <h3>{title}</h3>
        <Pie data={data} />
    </div>
);

export default PieChart;
