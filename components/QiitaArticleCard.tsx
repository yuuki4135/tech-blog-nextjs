export type QiitaArticle = {
  title: string;
  date: string;
  url: string;
  thumbnail: string;
};

type Props = {
  article: QiitaArticle;
};

export const QiitaArticleCard = ({ article }: Props) => {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      <div className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-200">
        <figure>
          <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">{article.title}</h2>
          <p className="text-gray-500">{article.date}</p>
        </div>
      </div>
    </a>
  );
};
