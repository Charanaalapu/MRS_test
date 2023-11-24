import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './PieActiveArc.css'; // Import a separate CSS file

export default function PieActiveArc({ data }) {
  if (!data || data.length === 0) {
    return <div>No data available for the chart</div>;
  }

  // Extract the first three items
  const firstThreeItems = data.slice(0, 3);

  // Calculate the total votes for the remaining items
  const totalVotesOthers = data.slice(3).reduce((total, item) => total + item['totel_votes'], 0);

  // Create the data array for the PieChart
  const chartData = [
    ...firstThreeItems.map((item) => ({ value: item['totel_votes'], label: item['Alliance'] })),
    { value: totalVotesOthers, label: 'Others' },
  ];

  return (
    <div style={{ backgroundColor: 'white', height: 300, width:'490px',alignItems:'flex-start', justifyContent:'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Import a separate CSS file for chart styling */}
      <PieChart
        className="custom-pie-chart" sx={{width:'90%'}} // Add a custom class to the PieChart component
        series={[
          {
            data: chartData,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        width={680}
        height={170}
      />
    </div>
  );
}
