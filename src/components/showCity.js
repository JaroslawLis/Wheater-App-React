import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "./showFirm.css";
const ShowCity = props => {
  return (
    <>
      <h1> {props.city.cityName} </h1>{" "}
      <h3> szerokość geograficzna: {props.city.cityLat} </h3>{" "}
      <h3> długość geograficzna: {props.city.cityLon} </h3>{" "}
      <Link to="/">
        <Button variant="outline-primary"> Powrót </Button>{" "}
      </Link>{" "}
    </>
  );
};

export default ShowCity;
