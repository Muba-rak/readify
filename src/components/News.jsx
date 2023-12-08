import React from "react";

const News = () => {
  return (
    <div className="news-wrapper">
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            voluptate molestiae quo at reprehenderit nesciunt laudantium, beatae
            sapiente ab. Accusantium!
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter Email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;
