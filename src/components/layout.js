import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <div className="flex justify-between">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <h1 className="main-heading">
          <Link to="/work">Work</Link>
        </h1>
      </div>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
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
