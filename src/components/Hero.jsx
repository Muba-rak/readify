import React from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";

const Hero = () => {
  return (
    <div className="section-center hero-wrapper">
      <article className="content">
        <h1 className="animate__animated animate__heartBeat">
          Read a book today
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
          earum recusandae modi numquam dignissimos vitae explicabo! At, minima
          ipsam.
        </p>
        <button className="btnn hero-btn">Get One</button>
      </article>
      <article className="img-container">
        <img src={book1} alt="nice table" className="main-img" />
        <img src={book2} alt="working" className="accent-img" />
      </article>
    </div>
  );
};

export default Hero;
