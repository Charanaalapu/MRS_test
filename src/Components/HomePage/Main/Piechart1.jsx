import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 25, label: 'Others 1', color: 'rgb(29, 137, 245)' },
  { id: 1, value: 12, label: 'Others 2', color: 'rgb(55, 62, 192)' },
  { id: 2, value: 25, label: 'Others 3', color: 'rgb(255, 146, 55)' },
  { id: 3, value: 35, label: 'Others 4', color: 'rgb(205, 36, 139)' },
];

export default function PieChart1() {
  return (
    <div style={{ position: 'relative', height: '300px', width: '100%' }}>
      <style>
        {`
          .MuiPieChart-labels {
            position: absolute;
            right: 0;
            visibility: hidden; 
          }

          .custom-legend {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }
          .legend-item {
            display: flex;
            align-items: center;
            margin-left:10px;
          }
          .legend-item span {
            margin-right: 10px;
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
          .custom-legend{
            margin-top:10px
          }
        `}
      </style>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: '#AFE6C3' },
          },
        ]}
        height={180}
      />
      <div className="custom-legend">
        {data.map((item) => (
          <div key={item.id} className="legend-item">
            <span style={{ backgroundColor: item.color }}></span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
