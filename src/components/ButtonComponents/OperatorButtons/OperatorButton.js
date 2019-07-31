import React from "react";

const OperatorButton = (props) => {
  return (
    <div className = "operator-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="opBtn">{props.operator.char}</button>
    </div>
  );
};

export default OperatorButton