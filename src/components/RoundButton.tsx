interface Props {
  children: string;
}

const RoundButton = ({ children }: Props) => {
  return (
    <button className="rounded-full w-36 h-12 bg-gray-200 me-4 hover:bg-amber-100 active:bg-gray-800 active:text-white">
      {children}
    </button>
  );
};

export default RoundButton;
