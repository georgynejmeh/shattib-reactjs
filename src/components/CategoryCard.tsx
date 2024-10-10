interface Props {
  children: string;
  img: string;
  num?: string;
}

const CategoryCard = ({ children, img, num = "0" }: Props) => {
  return (
    <div className="h-48 w-56">
      <div className="flex justify-center items-center h-4/5 rounded-xl overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="flex justify-between p-2">
        <span>{children}</span>
        <span>{num}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
