import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Pending', value: 15 },
  { name: 'Hold', value: 0 },
  { name: 'In Progress', value: 10 },
  { name: 'Completed', value: 20 },
  { name: 'Cancelled', value: 0 },
];

const COLORS = ['#28a745', '#007bff', '#ffc107', '#17a2b8', '#dc3545'];

const CustomPieChart = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">

      <h2 className="text-xl font-bold text-center mb-4">Task Status</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={60}   
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;

