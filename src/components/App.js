import { useEffect, useState } from 'react';
import React from 'react'
import '../styles/App.css';
const Shape = (props) => {
  return <div className={props.className}>{props.count}</div>;
};
const App = () => {
  const [selectedValue, setSelectedValue] = useState("square");
  const [shapes, setShapes] = useState([]);
  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };
  const addShape = () => {
    setShapes([...shapes, selectedValue]);
  };
  return (
    <div id="main">
      <div id="shape-creator" onChange={handleSelect}>
        <select>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((value, index) => {
          return <Shape key={index} className={value} count={index} />;
        })}
      </div>
    </div>
  );
};

export default App;

