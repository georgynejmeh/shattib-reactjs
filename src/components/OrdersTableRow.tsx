import { Link, purpleParagraphIcon, redTrashIcon } from "..";
import AccentText from "./AccentText";

interface Props {
  status: "قيد المعالجة" | "مقبول" | "مرفوض" | "مكتمل";
}

const OrdersTableRow = ({ status }: Props) => {
  return (
    <tr>
      <td>#12345647</td>
      <td>15/8/2024</td>
      <td className="min-w-52 max-w-52">
        طقم شطاف WC213، لوح رخام، لوح خشب مطبخ طقم شطاف WC213، لوح رخام، لوح خشب
        مطبخ طقم شطاف WC213، لوح رخام، لوح خشب مطبخ طقم شطاف WC213، لوح رخام،
      </td>
      <td>8</td>
      <td>
        <AccentText>320 ريال</AccentText>
      </td>
      <td>
        <div
          className={`mx-auto py-1 px-3 rounded-full max-w-28 text-center
            ${
              status === "مكتمل"
                ? "bg-green-200"
                : status === "مقبول"
                ? "bg-yellow-200"
                : status === "قيد المعالجة"
                ? "bg-orange-200"
                : status === "مرفوض"
                ? "bg-red-200"
                : ""
            }`}
        >
          {status}
        </div>
      </td>
      <td>16/8/2024</td>
      <td>
        <div className="mx-auto flex justify-center gap-4">
          <Link to={"/order"} className="flex items-center justify-center">
            <img src={purpleParagraphIcon} alt="" />
          </Link>
          <button>
            <img src={redTrashIcon} alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrdersTableRow;
