import { useState } from "..";

interface Props {
  children: string;
  img: string;
  num?: string;
}

const CategoryCard = ({ children, img, num = "0" }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={`h-48 w-56 rounded-xl ${
        isClicked ? "bg-primary text-white" : "hover:bg-yellow-100"
      }`}
    >
      <div className="flex justify-center items-center h-4/5 rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="flex justify-between p-2 gap-2">
        <span>{children}</span>
        <span>{num}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
