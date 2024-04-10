import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Paintings = () => {
  return (
    <Layout>
      <div className="paintings">
        <h1>here will be a collection of my paintings, im working on it</h1>
        <Link to="/work">Go back to work</Link>
      </div>
    </Layout>
  );
};

export default Paintings;
