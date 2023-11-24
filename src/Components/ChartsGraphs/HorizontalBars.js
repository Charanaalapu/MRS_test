import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: "Vote Count Alliance",
    },
  ],
  width: 350,
  height: 200,
};
const dataset = [
  {
    
    seoul: 1000000,
    month: 'Maritius Alliance',
  },
  {
    
    seoul: 33000,
    month: 'National Alliance',
  },
  
];

const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBars() {
  return (
    <div style={{backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Votes', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
    </div>
  );
}