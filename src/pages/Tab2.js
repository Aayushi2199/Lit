import React from 'react';
import './Tab2.css';
import PieChart from '../component/pieChart';
import BarChart from '../component/Barchart';

// Sample data for charts
const pieData1 = {
    labels: ['Equity', 'Fixed income', 'Others'],
    datasets: [
        {
            label: 'Pie Chart 1',
            data: [12, 19, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            borderColor: '#fff',
            borderWidth: 1,
        },
    ],
};

const pieData2 = {
    labels: ['Technology', 'Healthcare', 'Energy'],
    datasets: [
        {
            label: 'Pie Chart 2',
            data: [6, 11, 8],
            backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
            borderColor: '#fff',
            borderWidth: 1,
        },
    ],
};

const pieData3 = {
    labels: ['Mahindra MF', 'INVESCO', 'DWS'],
    datasets: [
        {
            label: 'Pie Chart 3',
            data: [7, 8, 15],
            backgroundColor: ['#E57373', '#64B5F6', '#81C784'],
            borderColor: '#fff',
            borderWidth: 1,
        },
    ],
};

const barData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'Bar Chart',
            data: [12, 19, 3, 5, 2],
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            borderWidth: 1,
        },
    ],
};

const tableData = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
];

const Tab2 = () => (
    <div className='Tab2'>
       
        <div className="card-container">
            <div className="chart-container">
                <div className="charts">
                    <PieChart data={pieData1} title="Asset" />
                    <PieChart data={pieData2} title="Sectors" />
                    <PieChart data={pieData3} title="Funds" />
                </div>
                <div className="lower-section">
                    <div className="table-container">
                        <h3>Data Table</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.age}</td>
                                        <td>{row.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <BarChart data={barData} />
                </div>
            </div>
        </div>
    </div>
);

export default Tab2;
