import Image from "next/image";
interface News {
  category:string;
  description:string;
  id:string;
  imageUrl:string;
  title:string;

}
const MainNews = ({ news }: {news:News[]}) => {
  // const firsNews = news[0];
  const [firsNews, ...otherNews] = news;
  // const otherNews = news.slice(1);
  console.log(otherNews, "from the other news");
  console.log(firsNews, "this is from news");
  return (
    <div className="flex gap-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image width={600} height={600} src={firsNews.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-red-600">{firsNews.category}</p>
          <h2 className="">{firsNews.title}</h2>
          <p>{firsNews.description}</p>
        </div>
      </div>

      <div className="grid gap-2">
        {otherNews.slice(0, 4).map((on) => (
          <div
            key={on.id}
            className="card bg-base-100 border border-gray-300 p-2"
          >
            <p className="text-red-600 mt-2 ml-4">{firsNews.category}</p>

            <div className="p-5"> {on.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
