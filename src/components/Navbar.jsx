import { NavLink } from "react-router";

import Login from "../assets/loginnav.png";
import Basket from "../assets/basket.png";
import Search from "../assets/search.png";

function Navbar() {
  return (
    <div className="">
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <NavLink to={"/"}>
            <h1 className="text-title text-2xl font-[700] ">گیاه لند</h1>
          </NavLink>
          <NavLink to={"/"}>
            <h3 className="text-title text-[18px]">صفحه اصلی</h3>
          </NavLink>
          <NavLink>
            <h3 className="text-black text-[18px]">گیاه پزشک</h3>
          </NavLink>
          <NavLink>
            <h3 className="text-black text-[18px]">وبلاگ</h3>
          </NavLink>
          <NavLink>
            <h3 className="text-black text-[18px]">تماس با ما</h3>
          </NavLink>
          <NavLink>
            <h3 className="text-black text-[18px]">درباره ما</h3>
          </NavLink>
        </div>
        <div className="flex items-center gap-5">
          <NavLink>
            <img src={Search} alt="Search" className="items-center border border-title rounded-xl p-3"/>
          </NavLink>
          <NavLink>
            <img src={Basket} alt="Basket" className="items-center border border-title rounded-xl p-3"/>
          </NavLink>

          <NavLink className="flex gap-3 items-center border border-title rounded-xl p-3">
            <img src={Login} alt="login" className="w-[20px] h-[18px]" />
            <h3 className="text-title">ورود / ثبت نام </h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
