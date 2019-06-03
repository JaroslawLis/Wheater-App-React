import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <Row className="settings">
      <Col
        md={{
          span: 3,
          offset: 10
        }}
      >
        <Link to="/settings">
          <Button variant="outline-primary"> Ustawienia </Button>{" "}
        </Link>{" "}
      </Col>{" "}
    </Row>
  );
};

export default Settings;
