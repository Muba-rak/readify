import React from "react";

const Book = ({ id, title, authors, image_url, rating }) => {
  return (
    <div className="maincard ">
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
  );
};

export default Book;
