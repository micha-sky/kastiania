import React from "react";
import { Link } from "gatsby";

const Paintings = () => {
  return (
    <div className="paintings">
      <h1>paintings</h1>
      <Link to="/work">Go back to work</Link>
    </div>
  );
};

export default Paintings;
