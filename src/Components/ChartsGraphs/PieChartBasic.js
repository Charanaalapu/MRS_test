import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Party", "Votes"],
  ["BJP", 20],
  ["AAP", 13],
  ["Congress", 26],
  ["AGP", 11],
  ["Others", 35],
];

export const options = {
  title: "Party Wise Win Percentage",
};

export function PieChartBasic() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
      
    />
  );
}
