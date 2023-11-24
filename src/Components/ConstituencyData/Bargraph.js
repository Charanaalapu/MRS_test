import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Mauritius Alliance", 8.94, "#b87333"], // RGB value
  ["National Alliance", 10.49, "silver"], // English color name
  ["MMM", 19.3, "gold"],
  ["Others", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export  default function App() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  );
}
