import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings row">
      <div className="col col-md-3 offset-md-10">
        <Link to="/settings">
          <Button variant="outline-primary">
            <i className="fa fa-cog" /> {"     "}Ustawienia
          </Button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Settings;
