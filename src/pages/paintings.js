import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Paintings = () => {
  return (
    <Layout>
      <div className="paintings">
        <h1>here are some collection of my texts</h1>
        <Link to="/work">Go back to work</Link>
      </div>
    </Layout>
  );
};

export default Paintings;
