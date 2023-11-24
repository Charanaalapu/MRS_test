import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const FDIChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Inflows, US $',
        type: 'line',
        data: [0.25, 0.22, 0.44, 0.46, 0.48, 0.38, 0.22, 0.46, 0.29, 0.59, 0.43, 0.43, 0.26, 0.38, 0.34, 0.11, 0.04, 0.01, 0.06, 0.03, -0.03, 0.27],
      },
      {
        name: '% of GDP',
        type: 'bar',
        data: [2.20, 1.97, 3.08, 3.13, 3.50, 3.01, 1.80, 3.48, 2.39, 5.05, 3.76, 4.30, 2.81, 3.78, 4.18, 1.52, 0.64, 0.21, 1.08, 0.66, -0.60, 5.70],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 0],
      },
      title: {
        text: '',
        align: 'left',
      },
      labels: [
        '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014',
        '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006',
        '2005', '2004', '2003', '2002', '2001', '2000',
      ],
      xaxis: {
        type: 'category',
      },
      yaxis: [
        {
          title: {
            text: 'Inflows, US $',
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
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} width={430}/>
    </div>
  );
};

export default FDIChart;
