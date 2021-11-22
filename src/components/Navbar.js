import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
};

export default Navbar;
