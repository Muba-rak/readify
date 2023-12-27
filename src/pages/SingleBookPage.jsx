import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
const SingleBookPage = () => {
  const { bookId } = useParams();
  const url = `https://example-data.draftbit.com/books/${bookId}`;
  const { isLoading, data: book, isError } = useFetch(url);
  const checkRating = (rate) => {
    if (rate > 4) {
      return "green";
    } else {
      return "red";
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <h2 className="text-center text-capitalize">
        Error occured while fetching Books.. Try again
      </h2>
    );
  }

  return (
    <div className="single-wrapper">
      <div className="section section-center">
        <Link to="/" className="btnn text-decoration-none text-nowrap link-btn">
          back to homepage
        </Link>
        <div className="product-center">
          <div className="image-wrapper">
            <img src={book.image_url} alt="" />
          </div>
          <section className="content">
            <h2>{book.title}</h2>

            <h5 className="price">{book.authors}</h5>
            <p className="desc">{book.description}</p>

            <p className="info">
              <span>Pages : </span>
              {book.num_pages}
            </p>
            <p className={`info ${checkRating(book.rating)}`}>
              <span>Rating : </span>
              {book.rating}
            </p>
            <p className="info genre">
              <span>Genres : </span>
              {book.genres}
            </p>
            <hr />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
