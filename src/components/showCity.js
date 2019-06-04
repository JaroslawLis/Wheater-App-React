import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "./showFirm.css";
const ShowCity = props => {
  return (
    <div className="container show_city">
      <h1> {props.city.cityName} </h1>{" "}
      <div className="row">
        <div className="col"> Szerokość geograficzna:</div>
        <div className="col">{props.city.cityLat} </div>{" "}
      </div>
      <div className="row">
        <div className="col">Długość geograficzna:</div>
        <div className="col">{props.city.cityLon} </div>{" "}
      </div>
      <div className="row">
        <div className="col">Średnia temperatura:</div>
        <div className="col">{props.city.averageTemp} &deg; C</div>{" "}
      </div>
      <Link to="/" className="return_link">
        <Button variant="outline-primary"> Powrót </Button>{" "}
      </Link>
    </div>
  );
};

export default ShowCity;
