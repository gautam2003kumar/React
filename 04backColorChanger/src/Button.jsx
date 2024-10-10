import React from "react";

function Button({col, setColor}){
  let textColor = "black";
  if (col === "black" ) {
    textColor = "white"; 
  }
  return(
    <button
      onClick={() => setColor(col)}
      className="outline-none px-4 py-1 rounded-full  shadow-lg"
      style={{
        color: textColor,
        backgroundColor: col
      }}>
        {col}
    </button>
  );
}

export default Button;