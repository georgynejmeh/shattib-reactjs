import { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminNewProductPage from "./AdminNewProductPage";
import AdminNewProductSecondPage from "./AdminNewProductSecondPage";

export interface MyFormData {
  SubCategoryId: number;
  Name: string;
  Description: string;
  Features: string;
  Price: number;
  MeasurementUnit: string;
  Meaurements: string;
  ManufacturingCountry: string;
  Color: string;
  Deaf: string;
  RetrivalAndReplacing: string;
  Notes: string;
  WareHouseCode: string;
  Specifications: {
    name: string;
    value: string;
  };
  Images?: File[];
}

const AdminNewProductContainer: React.FC = () => {
  const [formData, setFormData] = useState<MyFormData>({
    SubCategoryId: 1,
    Name: "",
    Description: "",
    Features: "",
    Price: 0.0,
    MeasurementUnit: "",
    Meaurements: "",
    ManufacturingCountry: "",
    Color: "",
    Deaf: "",
    RetrivalAndReplacing: "",
    Notes: "",
    WareHouseCode: "",
    Specifications: { name: "", value: "" },
  });

  const location = useLocation();
  const isSecondPage = location.pathname === "/admin/product/new/2";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update the specific field in the formData state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {isSecondPage ? (
        <AdminNewProductSecondPage
          formData={formData}
          onInputChange={handleInputChange}
          setFormData={setFormData}
        />
      ) : (
        <AdminNewProductPage
          formData={formData}
          onInputChange={handleInputChange}
        />
      )}
    </>
  );
};

export default AdminNewProductContainer;
