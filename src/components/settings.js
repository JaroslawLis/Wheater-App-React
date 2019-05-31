import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <Link to="/settings">
      {" "}
      <Button variant="outline-primary">Ustawienia</Button>
    </Link>
  );
};

export default Settings;
