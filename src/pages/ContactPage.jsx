import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-wrapper page">
      <div className="contact-wrapper-form">
        <div className="inner-div">
          <div className="title" style={{ margin: "auto" }}>
            <h2>Contact Us</h2>
            <div className="underline"></div>
          </div>
          <form>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <textarea placeholder="What you wanna say?" rows="6" />
            </div>

            <button className="btnn contact-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
