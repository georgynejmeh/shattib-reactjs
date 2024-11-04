import { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminNewProductPage from "./AdminNewProductPage";
import AdminNewProductSecondPage from "./AdminNewProductSecondPage";

export interface MyFormData {
  SubCategoryId: number;
  Name: string;
  Description: string;
  Features: string;
  Price: string;
  MeasurementUnit: string;
  Meaurements: string;
  ManufacturingCountry: string;
  Color: string;
  Deaf: string;
  RetrivalAndReplacing: string;
  Notes: string;
  Specifications: {
    name: string;
    value: string;
  };
  Images: string;
}

const AdminNewProductContainer = () => {
  const [formData, setFormData] = useState<MyFormData>({
    SubCategoryId: 1,
    Name: "",
    Description: "",
    Features: "",
    Price: "",
    MeasurementUnit: "",
    Meaurements: "",
    ManufacturingCountry: "",
    Color: "",
    Deaf: "",
    RetrivalAndReplacing: "",
    Notes: "",
    Specifications: { name: "", value: "" },
    Images: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const location = useLocation();
  const isSecondPage = location.pathname === "/admin/product/new/2";

  return (
    <>
      {isSecondPage ? (
        <AdminNewProductSecondPage
          formData={formData}
          onInputChange={handleInputChange}
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
