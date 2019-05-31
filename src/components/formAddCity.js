import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const FormAddCity = props => {
  return (
    <Form onSubmit={props.submit}>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Nazwa miasta"
            value={props.value}
            onChange={props.change}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Dodaj
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormAddCity;
