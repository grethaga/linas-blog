import ArticleListItem from "@/components/ArticleListItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { getCategorisedArticles } from "@/lib/articles";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const articles = getCategorisedArticles();
  const categoryArticles = articles?.[params.slug] || []; // Artikel für die spezifische Kategorie abrufen

  return (
    <div className="CategoryPage">
      <Navbar />
      <section className="mx-auto w-10/12 md:w-[50%] mt-20 flex flex-col gap-16 mb-20 px-2">
        <Link
          href={`/posts`}
          className="flex flex-row gap-1 place-items-center "
        >
          <ArrowLeftIcon width={20} />
        </Link>

        {categoryArticles.length > 0 ? (
          <ArticleListItem
            key={params.slug}
            category={params.slug}
            articles={categoryArticles}
          />
        ) : (
          <p className="text-center font-poppins">
            Keine Artikel in dieser Kategorie gefunden.
          </p>
        )}
      </section>
      <Socials />
      <Footer />
    </div>
  );
};

export default CategoryPage;
