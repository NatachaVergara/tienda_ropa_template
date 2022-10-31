import React from "react";
import { Link } from "react-router-dom";

const HeaderList = ({ li_className, link_className, link_to, link_text }) => {
  return (
    <li className={li_className}>
      <Link className={link_className} to={link_to}>
        {link_text}
      </Link>
    </li>
  );
};

export default HeaderList;
