import React from "react";
import aboutImg from "../assets/aboutimg.jpg";

const AboutPage = () => {
  return (
    <div>
      <main>
        <div className="page section section-center about-wrapper">
          <img src={aboutImg} alt="image" />
          <article>
            <div className="title">
              <h2>About Us</h2>
              <div className="underline"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                recusandae. Aliquid sint numquam fugit labore suscipit? Tenetur
                quibusdam beatae ducimus, impedit dicta reiciendis obcaecati sed
                possimus cupiditate quod modi aspernatur dignissimos animi ea
                porro natus totam ratione mollitia harum illo.
              </p>
            </div>
            <div className="title">
              <h2>Our Vision</h2>
              <div className="underline"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ex neque aut voluptates, aliquid dolorum molestias
                repudiandae, error reprehenderit rem amet nisi ut consequuntur
                reiciendis similique eligendi, perferendis molestiae suscipit
                illum? Vel labore perspiciatis alias animi, eius dolores
                accusamus perferendis eos, porro velit repellat quo explicabo
                nesciunt magni consequuntur dolorum?
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
