import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const FictionBooksChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'FDI Inflows',
        data: [0.2478, 0.4299, 0.4333, 0.589, 0.2934, 0.4556, 0.2165, 0.3788, 0.48, 0.4605, 0.4441, 0.2247, 0.2532],
      },
      {
        name: 'FDI Outflows',
        data: [0.0375, 0.1287, 0.1578, 0.1804, 0.1679, 0.1411, 0.0997, 0.0283, 0.0892, 0.0984, 0.0577, 0.0161, 0.0856],
      },
      {
        name: 'FDI Instock',
        data: [3.0161, 4.6584, 2.9986, 3.218, 4.3446, 4.1801, 4.3639, 4.6165, 5.2216, 5.4898, 5.7804, 5.6304, 5.3554],
      },
      {
        name: 'FDI Outstock',
        data: [0.8464, 0.8635, 1.331, 1.4005, 1.5047, 0.9861, 0.7328, 0.7575, 0.748, 0.6819, 0.6968, 0.6932, 0.7114],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: 'FDI Statistics',
        align: 'center',
      },
      xaxis: {
        categories: [
          '2009', '2010', '2011', '2012', '2013', '2014',
          '2015', '2016', '2017', '2018', '2019', '2020', '2021',
        ],
        labels: {
          formatter: function (val) {
            return val + "M";
          },
        },
      },
      yaxis: {
        title: {
          text: 'FDI (in millions)',
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "M";
          },
        },
      },
      fill: {
        opacity: 1,
        colors: ['#b4e4ff', '#81c7e7', '#5b9bd5', '#386fa4'],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} width={430} />
    </div>
  );
};

export default FictionBooksChart;
