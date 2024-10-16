import { uploadIcon } from ".";

interface Props {
  title: string;
  subTitle: string;
}

const UploadFile = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <span className="text-lg font-bold mb-4">{title}</span>
      <div className="flex justify-center items-center w-full h-full rounded-xl border-dashed border-gray-200 border-8 bg-gray-100 hover:bg-yellow-50 transition-all duration-700">
        <div className="flex flex-col justify-center items-center gap-4">
          <img className="w-16" src={uploadIcon} alt="" />
          <span className="text-blue-950 font-bold">{subTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
