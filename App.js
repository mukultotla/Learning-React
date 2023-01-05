/*
  Parcel does:
 - Create a server
 - HMR - Hot Module Replacement
 - File Watching Algorithm - Written in C++
 - Bundling
 - Minify
 - Cleaning our code
 - Dev and Production Build
 - Super Fast Build Algorithm
 - Image Optimization
 - Caching while development
 - Compatible with older version of browsers
 - test in https in dev
 - port number collision management
 - Consistent hasing algorithm
*/

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 testing from parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(container);