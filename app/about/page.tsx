import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import React from "react";

const About = () => {
  return (
    <div className="About">
      <Navbar />
      <div className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 px-2">
        <h1 className="font-cormorantGaramond font-light text-4xl text-neutral-900">
          Hi I'm Lina
        </h1>
        <p className="font-poppins text-gray-800">
          I have a background in business law and a passion for health, fitness,
          and nutrition. Alongside my studies, I completed a trainer
          certification, which deepened my knowledge of fitness and wellness.
          Through my blog, I want to share tips and insights on how to live a
          balanced, healthy lifestyle. Whether it's effective workout routines,
          nutritional advice, or simple strategies for well-being, I’m here to
          provide inspiration and support for anyone looking to lead a healthier
          life.{" "}
        </p>
      </div>
      <Socials />
      <Footer />
    </div>
  );
};

export default About;
