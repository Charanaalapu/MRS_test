import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ImportChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Imports - Billions of US $',
        type: 'line',
        data: [
          0.41, 0.49, 0.54, 0.51, 0.54, 0.60, 0.79, 1.18, 1.49, 1.56, 1.91, 1.91,
          1.89, 2.02, 2.33, 2.47, 2.84, 2.78, 2.77, 2.91, 2.85, 2.85, 2.82, 3.15,
          3.63, 4.17, 4.82, 5.30, 6.44, 5.18, 6.22, 7.50, 7.67, 7.47, 7.59, 6.68,
          6.57, 7.28, 7.66, 7.54, 5.30, 6.20,
        ],
      },
      {
        name: '% of GDP',
        type: 'line',
        data: [
          57.65, 59.45, 55.56, 54.42, 61.42, 55.19, 49.97, 47.00, 52.02, 55.42, 53.84, 62.51,
          69.69, 71.53, 72.16, 66.05, 62.55, 64.28, 65.46, 61.08, 64.27, 66.34, 66.52, 66.89,
          61.22, 61.79, 58.21, 54.11, 55.15, 64.22, 68.62, 65.01, 64.42, 56.75, 62.22, 65.09,
          65.71, 60.73, 58.07, 55.65, 52.19, 53.10, 51.99, 52.22, 46.51, 53.75,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2],
      },
      title: {
        // text: 'Import Trends Over the Years',
        align: 'left',
      },
      labels: Array.from({ length: 46 }, (_, i) => `${1976 + i}`),
      xaxis: {
        type: 'category',
      },
      yaxis: [
        {
          title: {
            text: 'Billions of US $',
          },
        },
        {
          opposite: true,
          title: {
            text: '% of GDP',
          },
        },
      ],
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} width={450} />
    </div>
  );
};

export default ImportChart;
