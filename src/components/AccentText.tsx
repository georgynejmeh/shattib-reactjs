interface Props {
  children: string;
  size?: "sm";
}

const AccentText = ({ children, size }: Props) => {
  return (
    <span
      className={
        size === "sm" ? "text-yellow-600" : "text-2xl font-bold text-yellow-600"
      }
    >
      {children}
    </span>
  );
};

export default AccentText;
