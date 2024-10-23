import ArticleListItem from "@/components/ArticleListItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import React from "react";
import { getCategorisedArticles } from "@/lib/articles";

const Posts = () => {
  const articles = getCategorisedArticles();

  return (
    <div className="Posts">
      <Navbar />
      <section className="mx-auto w-10/12 md:w-[60%]">
        <section className="sm:grid sm:grid-cols-2 flex flex-col gap-6 my-20">
          {articles !== null &&
            Object.keys(articles).map((article) => (
              <ArticleListItem
                key={article}
                category={article}
                articles={articles[article]}
              />
            ))}
        </section>
      </section>
      <Socials />
      <Footer />
    </div>
  );
};

export default Posts;
