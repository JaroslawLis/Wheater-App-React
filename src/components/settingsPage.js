import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const SettingsPage = props => {
  console.log(props);
  return (
    <>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Jednostka:
          </Form.Label>{" "}
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="&deg;C"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="metric"
              checked={props.units === "metric" ? true : false}
              onChange={props.handleFormSettings}
            />
            <Form.Check
              type="radio"
              label="&deg;F"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              value="imperial"
              checked={props.units === "imperial" ? true : false}
              onChange={props.handleFormSettings}
            />
          </Col>{" "}
        </Form.Group>{" "}
      </fieldset>{" "}
      <Link to="/">
        <Button variant="outline-primary"> Powrót </Button>{" "}
      </Link>{" "}
    </>
  );
};

export default SettingsPage;
