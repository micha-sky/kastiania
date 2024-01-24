import React from "react";
import { Link } from "gatsby";
import Paintings from "./paintings";
import Texts from "./texts";

const Work = () => {
    return (
        <div className="work">
            <h1>paintings</h1>
            <Link to="/paintings">paintings</Link>

            <h1>text</h1>
        </div>
    )
}

export default Work