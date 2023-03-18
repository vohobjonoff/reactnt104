/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { createRoot } from "react-dom/client";

import Pet from "./components/Pet";

const App = () => {
  return (
    <>
      <h2>hello</h2>
      <Pet name="Bobik" animal="dog" breed="milk" />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
