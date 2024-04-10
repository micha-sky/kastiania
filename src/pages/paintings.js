import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Paintings = () => {
  return (
    <Layout>
      <div className="paintings">
        <h1>here will be a collection of my paintings, im working on it</h1>

        <div className="paintings flex flex-col space-y-4">
          <StaticImage
            src="../images/paintings/IMG_9942.JPG"
            loading="lazy"
            width={500}
            className="painting"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Sleeping cat"
          />
          <StaticImage
            src="../images/paintings/IMG_9947.JPG"
            loading="lazy"
            width={700}
            className="painting"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Floating cat"
          />
        </div>
        <Link to="/work">Go back to work</Link>
      </div>
    </Layout>
  );
};

export default Paintings;
