import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <Navbar />
      <div className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 px-2">
        <h1 className="font-cormorantGaramond font-light text-4xl text-neutral-900">
          Contact me
        </h1>
      </div>
      <Socials />
      <Footer />
    </div>
  );
};

export default Contact;
