import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface HeadLines {
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headLines: HeadLines[] = data.data;
  console.log(headLines);

  return (
    <div className="bg-red-700 text-white ">
      <div className="flex max-w-7xl mx-auto">
        <div className="py-1 px-3  bg-red-800">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={10}>
          {headLines.map((h, ind) => (
            <span key={ind}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
