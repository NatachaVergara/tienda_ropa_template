import React from "react";

const SocialMedia = ({
    id,
    li_className,
    a_className,
    a_target,
    a_href,
    i_className,
}) => {
    return (
        <li className={li_className} key={id}>
            <a className={a_className} target={a_target} href={a_href}>
                <i className={i_className}></i>
            </a>
        </li>
    );
};

export default SocialMedia;
