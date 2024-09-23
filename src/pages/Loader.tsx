import React from "react";
import { Spinner } from "react-bootstrap"; // or any other spinner/SVG

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
