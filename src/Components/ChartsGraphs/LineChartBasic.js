import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const EnrollmentChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Total Enrollments',
      data: [19882, 21766, 22442, 21562, 23627, 22793, 21621, 20966, 21902, 22155, 23859, 25882, 28252],
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Govt. Institutions Enrollment Trends by Year',
        align: 'center',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021',
        ],
      },
    },
  });

  return (
    <div style={{width:'100%', border:'2px solid black', 
    marginLeft:'1rem', marginRight:'1rem', 
    borderRadius:'8px',
     backgroundColor:'white',
     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default EnrollmentChart;
