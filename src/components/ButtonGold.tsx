import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonGold = ({ children }: Props) => {
  return (
    <button
      className={
        "w-full px-4 py-1 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded hover:bg-secondary"
      }
    >
      {children}
    </button>
  );
};

export default ButtonGold;
