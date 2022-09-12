import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities }) => {
  return (
    <div>
      <Button variant="light">Current Location</Button>

      {cities.map((item) => {
        return <Button variant="light">{item}</Button>;
      })}
    </div>
  );
};

export default WeatherButton;
