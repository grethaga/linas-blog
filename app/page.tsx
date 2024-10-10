import ArticleListItem from "@/components/ArticleListItem";
import DropdownMenu from "@/components/DropDownMenu";
import Navbar from "@/components/Navbar";
import { getCategorisedArticles } from "@/lib/articles";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  const articles = getCategorisedArticles();
  return (
    <div className="Blog">
      <Navbar />
      <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 px-2">
        <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
          <h1>Lina's Blog</h1>
        </header>
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
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
    </div>
  );
}
