import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = await data.data;

  // শুধু স্ক্র্যাপেবল ক্যাটাগরিগুলো ফিল্টার করা হলো
  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    /* 💡 এখানে mt-5 এর বদলে py-3 এবং border দিয়ে হেডারের নিচে বসার মতো সুন্দর বার (Bar) লুক দেওয়া হলো */
    <div className="w-full bg-slate-50 border-t border-b border-slate-100 py-3 mt-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 justify-center items-center">
        {/* হোম লিঙ্ক */}
        <Link
          href={"/"}
          className="text-sm font-bold text-slate-700 hover:text-[#c00000] transition-colors duration-200"
        >
          হোম
        </Link>

        {/* ডাইনামিক ক্যাটাগরি লিঙ্কসমূহ */}
        {filteredNavs.map((n, i) => (
          <Link
            key={i}
            href={`/category/${n.slug}`}
            className="text-sm font-bold text-slate-700 hover:text-[#c00000] transition-colors duration-200"
          >
            {n.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
