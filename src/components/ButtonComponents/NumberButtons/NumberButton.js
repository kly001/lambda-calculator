import React from "react";

const NumberButton = (props) => {
  return (
    <div className = "number-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button>{props.NumberButton}</button>
    </div>
  );
};

export default NumberButton
