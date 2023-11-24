import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Gender", "%"],
  ["Male", 45],
  ["Female", 40],
  ["Others", 15],
 
];

export const options = {
  title: "Population",
};

export default function Population_Graph() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"90%"}
      
    />
  );
}
