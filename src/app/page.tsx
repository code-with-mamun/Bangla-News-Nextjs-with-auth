import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews = section[0].articles;
  const otherSections = section.slice(1);
  console.log(otherSections);
  return (
    <div>
      <Marquee></Marquee>
      <div className="my-4 grid grid-cols-3 h-400 max-w-7xl mx-auto">
        {/* news section  */}
        <div className="col-span-2 ">
          <MainNews news={mainNews}></MainNews>
          <div className="grid gap-5 mt-5">
            {otherSections.map((os) => (
              <div
                className="border-b-2 pb-1 border-red-700"
                key={os.curationId}
              >
                <h1 className="font-bold">{os.title}</h1>
                <div className="grid grid-cols-3 gap-2">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* most read section  */}
        <div className=" ml-5 bg-amber-700"></div>
      </div>
    </div>
  );
}
