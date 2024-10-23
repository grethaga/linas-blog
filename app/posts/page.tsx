import ArticleListItem from "@/components/ArticleListItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import React from "react";
import { getCategorisedArticles } from "@/lib/articles";
import Link from "next/link";

const Posts = () => {
  const articles = getCategorisedArticles();

  return (
    <div className="Posts">
      <Navbar />
      <section className="mx-auto w-10/12 md:w-[60%]">
        <section className="sm:grid sm:grid-cols-2 flex flex-col gap-10 my-20">
          {articles !== null &&
            Object.keys(articles).map((category) => (
              <Link
                key={category}
                href="/"
                className="font-cormorantGaramond text-4xl hover:text-orange-600"
              >
                {category}
                <p className="font-poppins text-sm text-gray-400">
                  {articles[category].length} articles
                </p>
              </Link>
            ))}
        </section>
      </section>
      <Socials />
      <Footer />
    </div>
  );
};

export default Posts;
