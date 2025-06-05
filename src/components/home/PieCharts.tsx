'use client'
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export const PieCharts = () => {
  const data = [
    {
      name: 'Shushil A',
      percent: 20,
      total: 100,
    },
    {
      name: 'Shushil B',
      percent: 20,
      total: 100,
    },
    {
      name: 'Shushil C',
      percent: 30,
      total: 120,
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="w-full">
      <div className="max-w-md mx-auto">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="percent"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};
