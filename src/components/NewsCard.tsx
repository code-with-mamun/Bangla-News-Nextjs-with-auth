import Image from "next/image";

const NewsCard = ({ news }) => {
  return (
    <div className="flex gap-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image width={600} height={600} src={news.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-red-600">{news.category}</p>
          <h2 className="">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
