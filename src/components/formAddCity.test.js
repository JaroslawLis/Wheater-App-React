import React from "react";
import { shallow, mount } from "enzyme";
import { Form, Button, Col, Row } from "react-bootstrap";
it("renders without crashing", () => {
  shallow(<Form />);
});

const wrapper = shallow(<Form />);
