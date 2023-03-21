/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import './style.css'


const App = () => {
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Ali');
  const [loading, setLoading] = useState(false);
  const [readmore, setReadMore] = useState(false);

  let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin `;


  if (loading) {
    return (
      <>
      <h2>Loading...</h2>
      </>
  )
}


  return (
    <>
      <button onClick={() => setCount(count + 1)} >inc</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)} >dec</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="hello"
      />
      {/* <p>{text.slice(0, 50)}...</p> */}
      {/* <p>{ readmore ? text : `${text.slice(0,50)}...`}</p> */}
      <p>{ readmore ? text : text.slice(0,50)}</p>
      <button onClick={() => setReadMore(true)}>
        {readmore ? 'less': 'more'}
      </button>
      {/* <button onClick={() => setLoading(true)}>load</button> */}
     {/* <Header />
     <Main /> */}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
