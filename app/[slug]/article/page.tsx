import Link from "next/link";
import { getArticleData } from "@/lib/articles";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);
  return (
    <section className="mx-auto w-10/12 md:w-[60%] mt-14 flex flex-col gap-5">
      <div className="flex justify-end">
        <p className="font-cormorantGaramond font-bold bg-customColor text-white py-1 px-2 rounded-lg text-sm w-fit">
          {articleData.category}
        </p>
      </div>
      <div className="flex justify-between font-poppins mb-10">
        <Link
          href={`/${articleData.category}/category`}
          className="flex flex-row gap-1 place-items-center "
        >
          <ArrowLeftIcon width={20} />
        </Link>

        <p>{articleData.date.toString()}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;
