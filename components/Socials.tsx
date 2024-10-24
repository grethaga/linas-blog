import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Socials = () => {
  return (
    <div className="text-gray-600 py-10 text-center">
      <a href="/" className="inline-block">
        <FontAwesomeIcon
          icon={faInstagram}
          className="icon-small icon-3d px-2"
        />
      </a>
      <a href="/" className="inline-block">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="icon-small icon-3d px-2"
        />
      </a>
      <a href="/" className="inline-block">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="icon-small icon-3d px-2 "
        />
      </a>
    </div>
  );
};

export default Socials;
