import React, { useState } from "react";

const News = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("provide a valid email");
      setTimeout(() => {
        setError("");
      }, 4000);
    } else {
      setSuccess(
        `Congratulations, ${email}, You have been added to the newsletter `
      );
      setTimeout(() => {
        setSuccess("");
      }, 4000);
    }
  };
  return (
    <div className="news-wrapper">
      <div className="section-center">
        <h3>
          Join our Newsletter and Get <span> 20% off</span>
        </h3>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              subscribe
            </button>
            <div>
              <p className="text-danger text-capitalize">{error} </p>
              <p className="text-success text-capitalize">{success}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;
