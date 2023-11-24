import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Party","BJP", "AGP", "Congress"],
  ["Seats", 55, 60, 22],
  ["Votes", 22, 10, 22],
];

export const options = {
  chart: {
    title: "Constituency name here",
    subtitle: "",
  },
};

export function GoogleBarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
