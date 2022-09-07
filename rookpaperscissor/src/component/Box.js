import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h2>win</h2>
    </div>
  );
};

export default Box;
