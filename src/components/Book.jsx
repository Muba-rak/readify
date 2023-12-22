import React from "react";
import { Link } from "react-router-dom";

const Book = ({ id, title, authors, image_url, rating }) => {
  return (
    <Link
      to={`/book/${id}`}
      className="text-decoration-none onhover maincard"
      // style={{ border: "1px solid red", margin: "auto" }}
    >
      <div className="maincardd">
        <img
          className="photo animate__animated animate__flipInX"
          src={image_url}
          alt={title}
        />
        <h4>{title} </h4>
        <div className="d-flex justify-content-between align-items-center">
          <p className="author">{authors} </p>
          <p className="ratings">Ratings :{rating} </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
