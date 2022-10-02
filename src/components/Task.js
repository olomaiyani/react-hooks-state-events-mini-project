import React from "react";

function Task() {
function Task({  task,text, category , click }) {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    <div className="task"
      >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        className="delete"
        onClick={() => click(task)}
      >
        X
      </button>
    </div>
  </div>
  );
}}
export default Task;