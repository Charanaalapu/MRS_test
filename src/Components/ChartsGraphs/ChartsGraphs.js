import React from 'react'

// import CanvasJSReact from '@canvasjs/react-charts';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartsGraphs = ({data}) => {

  let aliance_data = [
    { y: 37.68, label: "Mauritian Alliance" },
    { y: 32.76, label: "National Alliance" },
    { y: 20.57, label: "MMM" },
    {y:1.42, label: "Reform Party"},
    {y:7.57, label: "Others"}
  ]
    
let name = "Aliance Wise Results"
    if(data!=="Alliance"){
      name = "Party Wise Results"
    } else {
      name = "Alice WIse Results"
    }
  console.log(data)
// const party = data.party
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2", "dark2"
        title: {
          text: name
        },
        legend: {
          maxWidth: 100,
          itemWidth: 120
      },
        data: [
          {
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: aliance_data
          }
        ]
      };



  return (
    <div className='pie-chart-container'>
      {/* <p>General Election 2019</p> */}

        <div>
      <CanvasJSChart className="pie-chart" options={options} />
      </div>
      {/* You can get a reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
    </div>
  )
}

export default ChartsGraphs