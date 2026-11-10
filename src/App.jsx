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
import hearRateData from "./data/heartRateData.json";
import stepsData from "./data/stepsData.json";

// hardcoded patient metadata
const patient = {
  name: "Brenda Smith",
  dateOfBirth: "01-06-1934",
  age: 89,
  residence: "Buttercup Gardens",
  image: "/old.png",
};

defaults.maintainAspectRatio = false; // original aspect ratio is not maintained upon resize
defaults.responsive = true; // resizes the graph to fit the container

 // trivially, we want this as true to display the graph title
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start"; // aligns title to top left, centre or right of card
defaults.plugins.title.font.size = 30;
defaults.plugins.title.color = "black";

// defines and exports a React component App
// () => { ... } is a function that returns JSX, which is a 
// syntax extension for JavaScript that allows you to write 
// HTML-like code in your React components. 
// The JSX is then transpiled into JavaScript by tools like Babel, 
// allowing React to render the UI efficiently.
// export lets main.jsx import this component and use it to render the app
export const App = () => {
  return (
    <div className="App">
      <section className="patientCard" aria-label="Patient information">
        <img className="patientImage" src={patient.image} alt="" />
        <div className="patientDetails">
          <h1>{patient.name}</h1>
          <dl>
            <div>
              <dt>Date of birth</dt>
              <dd>{patient.dateOfBirth}</dd>
            </div>
            <div>
              <dt>Age</dt>
              <dd>{patient.age}</dd>
            </div>
            <div>
              <dt>Residence</dt>
              <dd>{patient.residence}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className = "dataCard heartRateCard"> 
        <Line
          data = {{
            // from the heartRate json, pull the labels for each data point 
            // and map them to the labels array
            labels: hearRateData.map((data) => data.label),
            datasets: [
              {
                label: "Heart Rate", // label unfortunately cannot trivially be removed without it displaying undefined 
                // from the heartRate json, pull the values for each data point
                data: hearRateData.map((data) => data.value),
                backgroundColor: "#064FF0", // colour of the dots
                borderColor: "#064FF0", // colour of the line
              },
            ],
          }}
          options = {{
            elements: {
              line: {
                tension: 0.5, // roughly defines how smooth the curvature of the line
                // is between data points. 0 is straight lines, 1 is very smooth curves
              },
            },
            plugins: {
              title: {
                text: "Heart Rate", // displayed above the graph
              },
            },
          }}
        />
      </div>



      <div className="dataCard stepCountCard">
        <Bar
          data = {{
            labels: stepsData.map((data) => data.label),
            datasets: [
              {
                label: "Step Count",
                data: stepsData.map((data) => data.value),
                // defines the alternating coloursof the bars in the bar graph,
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                ],
                borderRadius: 5, // rounds the corners of the bars
              },
            ],
          }}
          options = {{
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
