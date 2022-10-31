import React from "react";

const SocialMedia = ({ a_target, a_href, i_className }) => {
  return (
    <a
      className="text-light text-decoration-none m-1"
      target={a_target}
      href={a_href}
    >
      <li className="list-inline-item border border-light rounded-circle text-center">
        <i className={i_className}></i>
      </li>
    </a>
  );
};

export default SocialMedia;
