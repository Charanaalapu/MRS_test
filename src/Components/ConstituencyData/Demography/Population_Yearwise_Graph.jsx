// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Year", "Density", { role: "style" }],
//   ["2016", 8.94, "#b87333",], // RGB value
//   ["Silver", 10.49, "silver"], // English color name
//   ["Gold", 19.3, "gold"],
//   ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
// ];

// export  default function Population_Yearwise_Graph() {
//   return (
//     <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
//   );
// }
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Year",
    "Male",
    "Female",
    "Others",
  ],
  ["1983", 865, 522, 238],
  ["1987", 735, 599, 120],
  ["1991", 857, 587, 167],
  ["1995", 739, 615, 110],
  ["2000", 836, 629, 691],
  ["2005", 735, 599, 120],
  ["2010", 865, 522, 238],
  ["2014", 865, 522, 238],
  ["2019", 865, 522, 238],


];

export const options = {
  title: "Yearly Population of  Country",
  vAxis: { title: "Population" },
  hAxis: { title: "Year" },
  seriesType: "bars",
  series: { 3: { type: "line" } },
};

export default function Population_Yearwise_Graph() {
  return (
    <Chart
      chartType="ComboChart"
      width="600px"
      height="300px"
      data={data}
      options={options}
    />
  );
}

