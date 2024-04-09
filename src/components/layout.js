import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ title, children }) => {
  let header;

  header = (
    <div className="flex justify-between">
      <h1 className="main-heading">
        <Link to="/">Kastania Waldmüller</Link>
      </h1>
      <h1 className="main-heading">
        <Link to="/work">Work</Link>
      </h1>
    </div>
  );

  return (
    <div className="global-wrapper" data-is-root-path={true}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with help of
        {` `}
        <a href="https://www.alexmichalsky.com">a friend</a>
      </footer>
    </div>
  );
};

export default Layout;
