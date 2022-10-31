import React from "react";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import {
  contact_info_data,
  products_data,
  site_links,
  social_media_data,
} from "./data";
import FooterList from "./FooterList";
import SocialMedia from "./SocialMedia";
import Subscription from "./Subscription";

const Footer = () => {
  return (
    // <!-- Start Footer -->
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
              Zay Shop
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              {contact_info_data.map((li) => (
                <ContactInfo
                  key={li.id}
                  id={li.id}
                  i_className={li.i_className}
                  a_className={li.a_className}
                  a_href={li.a_href}
                  contact_text={li.contact_text}
                />
              ))}
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Productos
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              {products_data.map((li) => (
                <FooterList
                  key={li.id}
                  a_className={li.a_className}
                  a_href={li.a_href}
                  a_text={li.a_text}
                />
              ))}
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
             Links
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              {site_links.map((li) => (
                <FooterList
                  key={li.id}
                  a_className={li.a_className}
                  a_href={li.a_href}
                  a_text={li.a_text}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              {social_media_data.map((li) => (
                <SocialMedia
                  key={li.id}
                  id={li.id}
                  li_className={li.li_className}
                  a_className={li.a_className}
                  a_target={li.a_target}
                  a_href={li.a_href}
                  i_className={li.i_className}
                />
              ))}
            </ul>
          </div>
          <Subscription />
        </div>
      </div>
      <Copyright />
    </footer>
    /* <!-- End Footer --> */
  );
};

export default Footer;
