import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const FormAddCity = props => {
  return (
    <Form onSubmit={props.submit}>
      <Row>
        <Col xs={9}>
          <Form.Control
            type="text"
            placeholder="Nazwa miasta"
            value={props.value}
            onChange={props.change}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit" block>
            Dodaj
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormAddCity;
