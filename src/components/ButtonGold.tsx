import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonGold = ({ children }: Props) => {
  return (
    <button
      className={
        "w-full px-4 py-4 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-600 rounded-lg hover:bg-slate-900"
      }
    >
      {children}
    </button>
  );
};

export default ButtonGold;
