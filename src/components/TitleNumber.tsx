interface Props {
  children: string;
  subTitle: string;
  justifyBetween?: boolean;
  size?: "md";
}

const TitleNumber = ({
  children,
  subTitle,
  size,
  justifyBetween = false,
}: Props) => {
  return (
    <div
      className={
        (size === "md" ? `flex gap-4 py-1` : `flex gap-4 py-8 `) +
        (justifyBetween ? "justify-between" : "")
      }
    >
      <h1 className="text-xl font-bold">{children}</h1>
      <h2 className="text-xl font-bold text-gray-400">{subTitle}</h2>
    </div>
  );
};

export default TitleNumber;
