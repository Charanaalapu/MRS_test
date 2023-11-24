import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'GDP B($)',
        data: [12.9, 11.48, 11.4, 14.44, 14.74, 13.71, 12.59, 12.01, 13.07, 12.29, 11.67, 11.52, 10, 9.13],
      },
      {
        name: 'Per Capita $',
        data: [10216, 9063, 9005, 11403, 11643, 10842, 9966, 9508, 10366, 9765, 9291, 9197, 8000, 7318],
      },
      {
        name: 'Growth %',
        data: [8.69, 3.4, -14.6, 2.89, 4.01, 3.94, 3.86, 3.69, 3.83, 3.36, 3.5, 4.08, 4.38, 3.32],
      },
      {
        name: 'Anual Change %',
        data: [8.69, 3.4, -14.6, 2.89, 4.01, 3.94, 3.86, 3.69, 3.83, 3.36, 3.5, 4.08, 4.38, 3.32],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      xaxis: {
        categories: [
          '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015',
          '2014', '2013', '2012', '2011', '2010', '2009'
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return typeof val === 'number' ? '$ <strong>' + val.toFixed(2) + 'B</strong>' : val;
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return typeof val === 'number' ? '$ <strong>' + val.toFixed(2) + '</strong>' : val;
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return typeof val === 'number' ? '<strong>' + val.toFixed(2) + '%</strong>' : val;
              },
            },
          },
        ],
      },
      // ... (other options)
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" width={400} />
    </div>
  );
};

export default ApexChart;
