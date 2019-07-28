import React from "react";

const SpecialButton = (props) => {
  return (
    <div className = "special-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.SpecialButton}</button>
    </div>
  );
};

export default SpecialButton