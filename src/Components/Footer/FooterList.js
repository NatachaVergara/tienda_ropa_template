import React from "react";

const FooterList = ({ a_className, a_href, a_text }) => {
  return (
    <li>
      <a className={a_className} href={a_href}>
        {a_text}
      </a>
    </li>
  );
};

export default FooterList;
