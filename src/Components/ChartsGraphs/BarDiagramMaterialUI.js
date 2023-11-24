import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarDiagramMaterialUI({ data }) {
  if (!data || data.length === 0) {
    // Handle the case when there is no data
    return <div>No data available</div>;
  }

  const labels = data.map((entry) => entry.Alliance);
  const values = data.map((entry) => entry.totel_votes); // Assuming 'totel_votes' is the property name

  // Generate different colors for each dataset
  const colors = data.map((_, index) => `rgb(${index * 50}, ${index * 100}, ${index * 150})`);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: labels }]}
        series={[
          {
            data: values,
            colors, // Assigning colors to the series
          },
        ]}
        width={400}
        height={300}
      />
    </div>
  );
}
