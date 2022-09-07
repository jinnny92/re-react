import React from "react";

const Box = (props) => {
  let result;
  if (
    props.name === "Computer" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.name}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
