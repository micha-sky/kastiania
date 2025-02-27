import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <p>
          Kastania Waldmüller malt, schreibt Erzählungen und beschäftigt sich
          damit, wie die Ideen einer Zeit nicht nur wörtlich, sondern auch in
          Motiv- und Formensprache niedergeschrieben werden. Insbesondere die
          Frage, wie diese Spuren aufgegriffen oder umgedeutet werden können,
          spielt in ihrer Arbeit eine zentrale Rolle
        </p>
        <Link to="/">Go back to work</Link>
      </div>
    </Layout>
  );
};

export default About;
