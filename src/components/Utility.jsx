import CreditCard from "../assets/credit_card.png";
import Zmanat from "../assets/tik.png";
import Tahvil from "../assets/tahvil.png";
import Nemone1 from "../assets/nemone1.png";
import Nemone2 from "../assets/nemone2.png";

function Utility() {

  

  return (
    <div className="my-10">
      <div className="flex items-center gap-2">
        <div className="w-[354px] h-[116px]">
          <div className="w-[80px] h-[80px]   bg-green-100 rounded-full mx-auto">
            <img src={CreditCard} alt="CreditCard" />
          </div>
          <h2 className="text-center font-bold text-[22px] my-2">
            پرداخت درب منزل
          </h2>
          <p className="text-center text-[15px]">
            برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت انلاین امکان پرداخت
            درب منزل وجوددارد
          </p>
        </div>
        <div className="w-[354px] h-[116px]">
          <div className="w-[80px] h-[80px]   bg-green-100 rounded-full mx-auto">
            <img src={Zmanat} alt="CreditCard" />
          </div>
          <h2 className="text-center font-bold text-[22px] my-2">
            پرداخت درب منزل
          </h2>
          <p className="text-center text-[15px]">
            برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت انلاین امکان پرداخت
            درب منزل وجوددارد
          </p>
        </div>
        <div className="w-[354px] h-[116px]">
          <div className="w-[80px] h-[80px]   bg-green-100 rounded-full mx-auto">
            <img src={Tahvil} alt="CreditCard" />
          </div>
          <h2 className="text-center font-bold text-[22px] my-2">
            پرداخت درب منزل
          </h2>
          <p className="text-center text-[15px]">
            برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت انلاین امکان پرداخت
            درب منزل وجوددارد
          </p>
        </div>
      </div>
      <div className="my-25">
        <div className="flex items-center gap-8">
          <a href="#" className="w-[48%]">
            {" "}
            <img src={Nemone1} alt="Nemone1" />{" "}
          </a>
          <a href="#" className="w-[48%]">
            {" "}
            <img src={Nemone2} alt="Nemone2" />{" "}
          </a>
        </div>
      </div>

    </div>
  );
}

export default Utility;
