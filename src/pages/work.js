import React from "react";
import { Link } from "gatsby";
import Paintings from "./paintings";
import Texts from "./texts";
import Layout from "../components/layout";

const Work = () => {
  return (
    <Layout>
      <div className="work">
        <h1>
          <Link to="/paintings">paintings</Link>
        </h1>

        <h1>
          <Link to="/texts">texts</Link>
        </h1>
      </div>
    </Layout>
  );
};

export default Work;
