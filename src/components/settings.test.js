import React from "react";
import { shallow } from "enzyme";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Settings from "./settings";

it("should render correctly with no props", () => {
  const component = shallow(<Settings />);

  expect(component).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<Settings />);
});

describe("Settings", () => {
  it("renders <Settings/>", () => {
    //check render Link to
    shallow(<Link to="/settings" />);
  });
});

describe("Settings", () => {
  it("renders <Settings/>", () => {
    //check render Button
    shallow(<Button />);
  });
});
