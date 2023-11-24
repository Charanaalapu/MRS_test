import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available for the chart</div>;
  }

  // Extract the first three items
  const firstThreeItems = data.slice(0, 3);

  // Calculate the total votes for the remaining items
  const totalVotesOthers = data.slice(3).reduce((total, item) => total + item['totel_votes'], 0);

  // Calculate the percentage values for the first three items
  const percentageValues = firstThreeItems.map((item) => item['vote %']);

  // Calculate the percentage for the "Others" category
  const percentageOthers = 100 - percentageValues.reduce((sum, percentage) => sum + percentage, 0);

  // Create the data array for the DonutChart
  const chartData = {
    series: [...percentageValues, percentageOthers],
    options: {
      chart: {
        type: 'donut',
        width: 600, // Adjust the width of the chart
        height: 400, // Adjust the height of the chart
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      labels: [
        firstThreeItems[0]['Alliance'],
        firstThreeItems[1]['Alliance'],
        firstThreeItems[2]['Alliance'],
        'Others',
      ],
      legend: {
        fontSize: '12px', // Adjust the font size for labels
        textOverflow: 'ellipsis', // Set text overflow to ellipsis
        width: 200, // Adjust the width before text is truncated
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
    </div>
  );
};

export default DonutChart;
