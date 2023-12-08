import React from "react";
import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";

const FeaturedBooks = () => {
  const { data: books, isLoading } = useFetch(
    "https://example-data.draftbit.com/books?_limit=16"
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="section featured-wrapper">
      <div className="title">
        <h2>Featured Books</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center adventure-card mt-4">
        {books.map(({ id, title, authors, image_url, rating }) => {
          return (
            <div key={id} className="maincard">
              <img className="photo" src={image_url} alt={title} />
              <h4>{title} </h4>
              <div className="d-flex justify-content-between align-items-center">
                <p className="author">{authors} </p>
                <p className="ratings">Ratings :{rating} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBooks;
