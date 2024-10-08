import Link from "next/link";
import { ArticleItem } from "../types";

interface Props {
  category: string;
  articles: ArticleItem[];
}

export default function ArticleListItem({ category, articles }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-cormorantGaramond text-4xl ">{category}</h2>
      <div className="flex flex-col gap-2.5 font-poppins text-lg">
        {articles.map((article, id) => (
          <Link
            key={id}
            href={`/${article.id}`}
            className="text-neutral-900 hover:text-amber-700 transition duration-150"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
