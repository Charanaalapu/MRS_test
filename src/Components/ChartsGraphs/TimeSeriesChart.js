import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const GDPChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'GDP - Billions of US $',
        type: 'line',
        data: [
          0.36, 0.40, 0.44, 0.52, 0.58, 0.51, 0.51, 0.51, 0.51, 0.58, 0.63, 0.54,
          0.51, 0.54, 0.60, 0.79, 1.18, 1.49, 1.56, 1.91, 1.91, 1.89, 2.02, 2.33,
          2.47, 2.84, 2.78, 2.77, 2.91, 2.85, 2.85, 2.82, 3.15, 3.63, 4.17, 4.82,
          5.30, 6.44, 5.18, 6.22, 7.50, 7.67, 7.47, 7.59, 6.68, 6.57, 7.28, 7.66,
          7.54, 5.30, 6.20,
        ],
      },
      {
        name: '% of GDP',
        type: 'line',
        data: [
          50.77, 48.81, 43.22, 42.67, 51.17, 44.73, 47.16, 46.64, 48.67, 53.53, 60.50, 64.57,
          64.72, 64.20, 62.31, 59.30, 58.24, 56.72, 58.66, 63.59, 61.46, 65.68, 63.80, 61.09,
          67.99, 61.61, 56.01, 53.32, 59.02, 58.44, 55.87, 51.07, 47.68, 51.24, 52.44, 53.79,
          52.57, 52.52, 51.50, 49.17, 48.16, 46.10, 44.07, 39.37, 44.04, 53.75,
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
        // text: 'GDP Trends Over the Years',
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

export default GDPChart;
