import React from "react";
import { Link } from "react-router-dom";

const FooterList = ({ a_href, a_text }) => {
  return (
    <li>
      <Link className="text-decoration-none" to={a_href}>
        {a_text}
      </Link>
    </li>
  );
};

export default FooterList;
