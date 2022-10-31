import React from "react";

const ContactInfo = ({ id, i_className, a_className, a_href, contact_text }) => {
    return (
        <li key={id}>
            <i className={i_className} ></i>
            <a className={a_className} href={a_href}>
                {contact_text}
            </a>
        </li>
    );
};

export default ContactInfo;
