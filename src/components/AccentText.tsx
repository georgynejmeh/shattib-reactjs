import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "sm";
  bold?: boolean;
}

const AccentText = ({ children, size, bold = false }: Props) => {
  return (
    <span
      className={
        size === "sm"
          ? bold
            ? "text-yellow-600 font-bold"
            : "text-yellow-600"
          : "text-2xl font-bold text-yellow-600"
      }
    >
      {children}
    </span>
  );
};

export default AccentText;
