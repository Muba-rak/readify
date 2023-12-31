import React from "react";
import { Link } from "react-router-dom";

const Book = ({ id, title, authors, image_url, rating }) => {
  const checkRating = (rate) => {
    if (rate > 4) {
      return "green";
    } else {
      return "red";
    }
  };
  return (
    <Link
      to={`/book/${id}`}
      className="text-decoration-none onhover maincard onhover"
    >
      <div>
        <img
          className="photo animate__animated animate__flipInX"
          src={image_url}
          alt={title}
        />
        <h4>{title} </h4>
        <div className="d-flex justify-content-between align-items-center">
          <p className="author">{authors} </p>
          <p className="ratings">
            Ratings :{" "}
            <span className={`  ${checkRating(rating)}`}> {rating} </span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
