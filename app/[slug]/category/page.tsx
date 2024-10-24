import ArticleListItem from "@/components/ArticleListItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { getCategorisedArticles } from "@/lib/articles";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const articles = getCategorisedArticles();
  const categoryArticles = articles?.[params.slug] || []; // Artikel für die spezifische Kategorie abrufen

  return (
    <div className="CategoryPage">
      <Navbar />
      <section className="mx-auto w-10/12 md:w-[60%] mt-20 flex flex-col gap-16 mb-20 px-2">
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
