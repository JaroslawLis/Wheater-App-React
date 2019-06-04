import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
//import "./mainTable.css";

class MainTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = this.props.data.map((city, i) => (
      <Row className="displayCity" key={city.cityID}>
        <Col xs={1}> {i + 1} </Col>{" "}
        <Col xs={6}>
          <Link to={`/showcity/${city.cityID}`}> {city.cityName} </Link>{" "}
        </Col>{" "}
        <Col>
          {" "}
          {city.averageTemp} &deg; {this.props.units === "imperial" ? "F" : "C"}{" "}
        </Col>{" "}
        <Col className="button">
          <Button
            variant="outline-danger"
            block
            onClick={() => this.props.handleRemoveButton(i)}
          >
            <i className="fa fa-minus-circle" /> Usuń{" "}
          </Button>{" "}
        </Col>{" "}
      </Row>
    ));
    return (
      <>
        <Row className="title">
          <Col xs={1}> # </Col> <Col xs={6}> Miasto </Col>{" "}
          <Col> Średnia prognozowana temperatura </Col> <Col />
        </Row>{" "}
        {data}{" "}
      </>
    );
  }
}

export default MainTable;
