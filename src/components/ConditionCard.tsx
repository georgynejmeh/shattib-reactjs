import {
  // AccentText,
  // categoryImg01,
  Link,
  // subCategoryImg01
} from "..";
import { Cirteria } from "../models/Criteria";

interface Props {
  id?: number;
  // status?: "معلًقة" | "مقبولة" | "مرفوضة";
  status?: "Pending" | "Accepted" | "Rejected" | string;
  criteria?: Cirteria;
  image?: string;
}

const ConditionCard = ({ id = 0, status, criteria, image }: Props) => {
  if (criteria) {
    id = criteria.id;
  }
  return (
    <Link to={`doc/${id}`}>
      <div className="w-72 h-72 flex flex-col justify-between rounded-xl bg-gray-100 shadow p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold self-center">{criteria?.title}</h1>
          <hr />
          <div className="flex justify-center">
            {/* <div className="flex gap-2">
              <span>عدد التصنيفات</span>
              <AccentText size="sm">3</AccentText>
            </div> */}
            <div className="flex gap-2">
              <span>الحالة</span>
              <span
                className={
                  status === "Pending" //"معلًقة"
                    ? "font-bold text-blue-600"
                    : status === "Accepted" //"مقبولة"
                    ? "font-bold text-green-600"
                    : status === "Rejected" //"مرفوضة"
                    ? "font-bold text-red-600"
                    : "font-bold"
                }
              >
                {status === "Pending" //"معلًقة"
                  ? "معلًقة"
                  : status === "Accepted" //"مقبولة"
                  ? "مقبولة"
                  : status === "Rejected" //"مرفوضة"
                  ? "مرفوضة"
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div className="px-2 pt-2 h-40">
          {image && (
            <img
              className="rounded-xl object-cover w-full h-full"
              src={image}
              alt=""
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ConditionCard;
