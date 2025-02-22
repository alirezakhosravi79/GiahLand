import { NavLink } from "react-router";
import Heroimg from "../assets/imghero.png";
import Arrow from "../assets/arrow_back.png"

function Hero() {
  return (
    <div className="mt-10 flex gap-4">
      <div className="w-full basis-[60%]">
        <h1 className="text-black text-2xl my-8 font-[700]">خرید راحت گیاه،با <span className="text-title text-2xl font-[700]">گیاه لند !</span></h1>
        <p className="text-black my-[32px] text-[18px] leading-9">
          با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه<br /> استفاده
          کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت <br />مشاوره
          بگیری.
        </p>
        <div className="flex gap-[22px] my-12">
          <NavLink className="bg-title text-white text-center px-6 py-2 w-[250px] rounded-xl">گیاهان تخفیف دار</NavLink>
          <NavLink className="flex text-center text-title items-center justify-center gap-2 w-[250px] border border-dashed rounded-xl"><p>مشاوره با گیاه پزشک </p><img src={Arrow} alt="Arrow" /></NavLink>
        </div>
        <div className="flex w-[654px] gap-5 my-4">
          <div className="w-[30%]">
            <h2 className="text-green-900 text-[32px]">+۹۴۳</h2>
            <p className="text-green-950 text-[20px]">گیاه خانگی</p>
          </div>
          <div className="w-[30%]">
            <h2 className="text-green-900 text-[32px]">+۲۳۴</h2>
            <p className="text-green-950 text-[20px]">گیاه تزئینی</p>
          </div>
          <div className="w-[30%]">
            <h2 className="text-green-900 text-[32px]">+۱۲۸</h2>
            <p className="text-green-950 text-[20px]">گیاه کادویی</p>
          </div>
        </div>
      </div>
      <div className="w-full basis-[40%] flex items-center justify-center">
        <img src={Heroimg} alt="" className="w-full"/>
      </div>
    </div>
  );
}

export default Hero;
