import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Container } from "react-bootstrap";
//import "./mainTable.css";

class MainTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  render() {
    const data = this.props.data.map((city, i) => (
      <Row>
        <Col>{i + 1}</Col>
        <Col>
          <Link to={`/showcity/${city.cityID}`}>{city.cityName}</Link>
        </Col>

        <Col>{city.averageTemp}</Col>

        <Col>
          <Button
            variant="outline-danger"
            onClick={() => this.props.handleRemoveButton(i)}
          >
            Usuń
          </Button>
        </Col>
      </Row>
    ));
    return (
      <Container>
        <Row>
          <Col>#</Col>
          <Col>Miasto</Col>
          <Col>Średnia prognozowana temperatura</Col>
          <Col />
        </Row>
        {data}
      </Container>
    );
  }
}

export default MainTable;
