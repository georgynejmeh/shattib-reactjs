import {
  bluePenIcon,
  PaginationButtons,
  productImg,
  redTrashIcon,
} from "../..";
import "../../App.css";

const AdminProductsPage = () => {
  // TODO DELETE TEMP
  const temp = [1, 2, 3, 4, 5];
  return (
    <main className="p-main">
      <h1 className="text-4xl font-bold text-primary mb-8"> قائمة المنتجات</h1>
      <section className="flex flex-col items-center ">
        <table className="admin-product-table">
          <thead>
            <tr>
              <th>رمز التخزين</th>
              <th>المنتج</th>
              <th>التصنيف</th>
              <th>الكمية</th>
              <th>السعر</th>
              <th>العمليات</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO DELETE LOOP TEMP */}
            {temp.map(() => (
              <tr>
                <td>#12345647</td>
                <td>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      className=" h-16 aspect-video rounded object-cover"
                      src={productImg}
                      alt=""
                    />
                    <span>طقم شطاف WC213</span>
                  </div>
                </td>
                <td>مواد الصحية</td>
                <td>150</td>
                <td>20 ريال</td>
                <td>
                  <div className="flex items-center justify-center gap-4">
                    <button>
                      <img src={bluePenIcon} alt="" />
                    </button>
                    <button>
                      <img src={redTrashIcon} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <PaginationButtons />
      </section>
    </main>
  );
};

export default AdminProductsPage;
