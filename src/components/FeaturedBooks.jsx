import React from "react";
import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";
import "animate.css";
import Book from "./Book";

const FeaturedBooks = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = useFetch("https://example-data.draftbit.com/books?_limit=16");

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
    <div className="section featured-wrapper">
      <div className="title">
        <h2>Featured Books</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center adventure-card mt-4">
        {books.map((book) => {
          return <Book key={books.id} {...book} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedBooks;
