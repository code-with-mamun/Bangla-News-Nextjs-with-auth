import Image from "next/image";
import NavLInks from "./NavLInks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  console.log(date);

  return (
   <header  className="mx-auto my-2">
   <div className="flex gap-50   max-w-5xl mx-auto ">
      <div className="flex justify-between items-center">
        <Image
          className="w-10 h-10"
          height={50}
          width={50}
          src={"/logo.webp"}
          alt="logo"
        ></Image>
        <div>
          <div className="mt-1.5">Bangla News 24</div>
          <div className="ml-1">{date}</div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-1.5">
        <button className="btn ">সাইন ইন</button>
        <button className="btn btn-error">সাইন আপ</button>
      </div>
    </div>
    </header>
  );
};

export default Header;
