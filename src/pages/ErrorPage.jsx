import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="page-100 error-wrapper">
      <section>
        <h1>😢😢😢 OOPS</h1>
        <h3>Page You tried cannot be found</h3>
        <Link to="/" className="btnn text-decoration-none">
          Back Home
        </Link>
      </section>
    </div>
  );
};

export default ErrorPage;
