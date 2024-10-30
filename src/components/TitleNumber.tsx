interface Props {
  children: string;
  subTitle: string;
  justifyBetween?: boolean;
  size?: "md";
  version?: 1 | 2;
  column?: boolean;
}

const TitleNumber = ({
  children,
  subTitle,
  size,
  justifyBetween = false,
  version = 1,
  column = false,
}: Props) => {
  return version === 2 ? (
    <div
      className={
        (size === "md" ? " flex gap-4 py-1 " : " flex gap-4 py-8 ") +
        (justifyBetween ? " justify-between " : " ") +
        (column ? " flex-col items-center justify-center " : " ")
      }
    >
      <h1 className="text-4xl font-bold text-gray-600">{children}</h1>
      <h2 className="text-4xl font-bold text-gray-400">{subTitle}</h2>
    </div>
  ) : (
    <div
      className={
        (size === "md" ? " flex gap-4 py-1 " : " flex gap-4 py-8 ") +
        (justifyBetween ? " justify-between " : " ") +
        (column ? " flex-col items-center justify-center " : " ")
      }
    >
      <h1 className="text-xl font-bold">{children}</h1>
      <h2 className="text-xl font-bold text-gray-400">{subTitle}</h2>
    </div>
  );
};

export default TitleNumber;
