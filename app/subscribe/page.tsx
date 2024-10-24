import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import React from "react";

const subscribe = () => {
  return (
    <div className="Subscribe">
      <Navbar showSubscribeButton={false} />
      <section className="mx-auto text-center my-20 flex flex-col gap-7 px-2">
        <h1 className="font-cormorantGaramond text-5xl">Don't miss anything</h1>
        <input
          type="email"
          placeholder="Your email.."
          className="w-1/2 mx-auto p-1.5 rounded-lg font-poppins text-sm focus:outline-none"
        />
        <button className="bg-customColor w-fit px-2 py-1.5 mx-auto rounded-xl font-poppins text-white text-sm hover:bg-orange-500">
          subscribe
        </button>
      </section>
      <Socials />
      <Footer />
    </div>
  );
};

export default subscribe;
