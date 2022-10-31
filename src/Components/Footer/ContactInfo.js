import React from "react";

const ContactInfo = ({ i_className, a_href, contact_text }) => {
    return (
        <li>
            <i className={i_className} ></i>
            <a className="text-decoration-none" href={a_href}>
                {contact_text}
            </a>
        </li>
    );
};

export default ContactInfo;
