import { categoryImg01, categoryImg02, categoryImg03, eyeIcon } from ".";

interface Temp {
  number: 1 | 2 | 3;
}

const GoldConditionCard = ({ number }: Temp) => {
  return (
    <div className="w-60 h-52">
      <div className="w-full h-full bg-amber-200">
        <div className="h-40 w-full">
          <img
            className="rounded-b-xl w-full h-full object-cover"
            src={
              number === 1
                ? categoryImg01
                : number === 2
                ? categoryImg02
                : number === 3
                ? categoryImg03
                : ""
            }
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <h1 className="text-2xl p-2">ألواح خشبية</h1>
          <h1 className="text-2xl p-2">8</h1>
        </div>
      </div>
      <div className="flex py-2 gap-4">
        <button className="rounded py-1 px-2 bg-gray-600 text-white">
          أضف معلومات
        </button>
        <button>
          <div className="flex">
            <img src={eyeIcon} alt="" />
            <span>إزالة</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GoldConditionCard;
