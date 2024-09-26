import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import ProjectStatus from './ProjectStatus';

const data = [
  { status: 'Pending', count: 0.75 },
  { status: 'Hold', count: 0 },
  { status: 'In Progress', count: 1.80 },
  { status: 'Completed', count: 1.75 },
  { status: 'Cancelled', count: 0 },
];

const getColor = (status) => {
  switch (status) {
    case 'Pending':
      return '#28a745';
    case 'Hold':
      return '#007bff';
    case 'In Progress':
      return '#ffc107';
    case 'Completed':
      return '#17a2b8';
    case 'Cancelled':
      return '#dc3545';
    default:
      return '#000';
  }
};

const CustomBarChart = () => {
  return (
    <>
    <div className='flex max-w-full'>
    <div className="flex max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg ml-0 " >
      <div className="flex-1">
        <h2 className=" flex text-xl font-bold text-center mb-4">Project Detail</h2>
        <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis 
            domain={[0, 2]} 
            ticks={[0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]} 
            interval={0} 
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="count">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.status)} />
            ))}
          </Bar>
        </BarChart>
      </div>
      
    </div>
    <ProjectStatus/>
    </div>
    </>
  );
};

export default CustomBarChart;
