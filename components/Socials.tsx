import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Socials = () => {
  return (
    <div className="text-gray-600 py-10 text-center">
      <a href="/">
        <FontAwesomeIcon icon={faInstagram} className="icon-small px-2" />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faLinkedin} className="icon-small px-2" />
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faEnvelope} className="icon-small px-2" />
      </a>
    </div>
  );
};

export default Socials;
