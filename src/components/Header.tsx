import Image from "next/image";
import NavLInks from "./NavLInks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  console.log(date);

  return (
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
          <div>Bangla News 24</div>
          <div>{date}</div>
        </div>
      </div>
      <div className="flex gap-2.5">
        <button className="btn ">সাইন ইন</button>
        <button className="btn btn-error">সাইন আপ</button>
      </div>
    </div>
  );
};

export default Header;
