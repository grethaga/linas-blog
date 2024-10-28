import ArticleListItem from "@/components/ArticleListItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { getCategorisedArticles, getSortedArticles } from "@/lib/articles";
import { ArticleItem } from "@/types";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import moment from "moment";
import Link from "next/link";

config.autoAddCss = false;

export default function Home() {
  // const articles = getCategorisedArticles();

  const latestArticles = getSortedArticles().slice(0, 3);

  return (
    <div className="Blog">
      <Navbar />
      <section className="mx-auto w-10/12 md:w-[60%] mt-20 flex flex-col gap-16 mb-20 px-2">
        <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
          <h1>Lina's Blog</h1>
        </header>
        <div className="font-cormorantGaramond text-4xl text-neutral-900 mt-8">
          <h2>What's new?</h2>
        </div>
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {latestArticles.map((article) => (
            <div key={article.id}>
              <Link
                href={`/${article.id}/article`}
                className="text-lg font-poppins mr-2 hover:text-orange-600"
              >
                {article.title}
              </Link>
              <p className="font-poppins text-sm text-gray-400">
                {moment(article.date, "DD-MM-YYYY").fromNow()}
              </p>
            </div>
          ))}
        </section>
        {/*<section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {articles !== null &&
            Object.keys(articles).map((article) => (
              <ArticleListItem
                key={article}
                category={article}
                articles={articles[article]}
              />
            ))}
        </section></div>*/}
      </section>
      <Socials />
      <Footer />
    </div>
  );
}
