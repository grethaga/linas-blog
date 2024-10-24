import ArticleListItem from "@/components/ArticleListItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { getCategorisedArticles } from "@/lib/articles";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";

config.autoAddCss = false;

export default function Home() {
  const articles = getCategorisedArticles();
  return (
    <div className="Blog">
      <Navbar />
      <section className="mx-auto w-10/12 md:w-[60%] mt-20 flex flex-col gap-16 mb-20 px-2">
        <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
          <h1>Lina's Blog</h1>
        </header>
        <section>
          <h2>What's new</h2>
          neueste posts mit stunden oder tages anzeige
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
