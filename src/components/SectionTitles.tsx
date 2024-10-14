interface Props {
  title01?: string;
  title02?: string;
  endTitle?: string;
}

const SectionTitles = ({ title01, title02, endTitle }: Props) => {
  return (
    <div className="flex gap-2">
      <button>
        <span className="text-gray-500">{title01}</span>
      </button>
      <span className="text-gray-500">&gt;</span>
      <button>
        <span className="text-gray-500">{title02}</span>
      </button>
      <span className="text-gray-500">&gt;</span>
      <span className="font-bold">{endTitle}</span>
    </div>
  );
};

export default SectionTitles;
