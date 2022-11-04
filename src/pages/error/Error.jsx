import React from "react";
import "./error.scss";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error">
      <h2>Error</h2>
      <div className="text"> page not found</div>
      <Link to="/">
        <button className="btn-home">Go To Home</button>
      </Link>
    </section>
  );
};

export default Error;
