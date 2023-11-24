import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'GDP Growth (%)',
        data: [8.69, 3.4, -14.6, 2.89, 4.01, 3.94, 3.86, 3.69, 3.83, 3.36, 3.5, 4.08, 4.38, 3.32],
      },
      {
        name: 'Annual Change',
        data: [5.29, 18, -17.49, -1.12, 0.07, 0.08, 0.17, -0.14, 0.47, -0.14, -0.58, -0.3, 1.06, -2.07],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '-',
        align: 'left',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [
          '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015',
          '2014', '2013', '2012', '2011', '2010', '2009',
        ],
        title: {
          text: 'Year',
        },
      },
      yaxis: {
        title: {
          text: 'Percentage',
        },
        min: -20,
        max: 25,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" width={400}  height={270}/>
    </div>
  );
};

export default ApexChart;
