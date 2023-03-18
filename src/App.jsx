/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import './style.css'


const App = () => {
  return (
    <>
     <Header />
     <Main />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
