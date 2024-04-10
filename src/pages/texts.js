import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Texts = () => {
  return (
    <Layout>
      <div className="texts">
        <h1>here will be some of the texts i wrote recently</h1>
        <Link to="/work">Go back to work</Link>
      </div>
    </Layout>
  );
};

export default Texts;
