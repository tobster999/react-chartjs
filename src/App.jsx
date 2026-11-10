// App.jsx defines the graphs visible on the webpage
// https://www.chartjs.org/docs/latest/

import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "./App.css";

// import dummy data for display - in the end this will 
// be pulled from the postgres database via API
// the dummy data is trivially stored in json -
// i still need to research the format in which data will truly be recovered
import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";
import hearRateData from "./data/heartRateData.json";
import stepsData from "./data/stepsData.json";

defaults.maintainAspectRatio = false; // original aspect ratio is not maintained upon resize
defaults.responsive = true; // resizes the graph to fit the container

 // trivially, we want this as true to display the graph title
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 40;
defaults.plugins.title.color = "black";

export const App = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: hearRateData.map((data) => data.label),
            datasets: [
              {
                label: "Heart Rate", // label cannot trivially be removed without it displaying undefined 
                data: hearRateData.map((data) => data.value),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Heart Rate",
              },
            },
          }}
        />
      </div>

      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: stepsData.map((data) => data.label),
            datasets: [
              {
                label: "Step Count",
                data: stepsData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Steps per Day",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
