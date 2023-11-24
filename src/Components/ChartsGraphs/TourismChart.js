import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TourismStatisticsChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Tourist Spending ($)',
        type: 'line',
        align: 'center',
        data: [
          518000000.00, 2024000000.00, 2161000000.00, 2005000000.00, 1824000000.00,
          1680000000.00, 1719000000.00, 1593000000.00, 1778000000.00, 1808000000.00,
          1585000000.00, 1390000000.00, 1823000000.00, 1663000000.00, 1302000000.00,
          1189000000.00, 1156000000.00, 960000000.00, 829000000.00, 820000000.00,
          732000000.00, 718000000.00, 672000000.00, 666000000.00, 705000000.00,
          616000000.00,
        ],
      },
      {
        name: '% of Exports',
        type: 'line',
        align: 'left', 
        data: [
          16.77, 38.49, 38.69, 37.19, 35.07, 31.14, 28.66, 28.22, 29.35, 31.03,
          31.98, 33.27, 36.99, 37.43, 32.55, 31.65, 33.52, 30.21, 28.1, 28.77,
          27.91, 27.35, 25.98, 26.71, 25.44, 26.22,
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
        text: 'Mauritius Tourism',
        align: 'center',
      },
      xaxis: {
        categories: [
          '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002',
          '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
          '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018',
          '2019', '2020',
        ],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB',
          },
          labels: {
            style: {
              colors: '#008FFB',
            },
          },
          title: {
            text: 'Tourist Spending ($)',
            style: {
              color: '#008FFB',
            },
          },
        },
        {
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396',
          },
          labels: {
            style: {
              colors: '#00E396',
            },
          },
          title: {
            text: '% of Exports',
            style: {
              color: '#00E396',
            },
          },
        },
      ],
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: 40,
      },
    },
  });

  return (
    <div id="chart" style={{width:'100%', alignItems:'center', display:'flex', justifyContent:'center'}}>
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} width={700} />
    </div>
  );
};

export default TourismStatisticsChart;
