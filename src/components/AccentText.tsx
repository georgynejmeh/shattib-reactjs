interface Props {
  children: string;
}

const AccentText = ({ children }: Props) => {
  return <span className="text-2xl font-bold text-yellow-600">{children}</span>;
};

export default AccentText;
