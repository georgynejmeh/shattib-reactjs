import { AccentText, useApi, useEffect, useParams, useState } from "../..";
import { Product } from "../../models/Product";

const AdminEditProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { data, error, isLoading } = useApi<Product>(`Products/${id}`);
  const { patchForm } = useApi(`Products/${id}`);

  const [formData, setFormData] = useState({
    subCategoryId: 1,
    name: "",
    description: "",
    features: "",
    price: 0.0,
    measurementUnit: "",
    meaurements: "",
    manufacturingCountry: "",
    color: "",
    deaf: "",
    retrivalAndReplacing: "",
    notes: "",
    wareHouseCode: "",
    specifications: [{ name: "", value: "" }],
    images: [{ imagePath: "" }],
  });

  useEffect(() => {
    if (data) {
      setFormData({
        subCategoryId: data.subCategoryId,
        name: data.name,
        description: data.description,
        features: data.features,
        price: data.price,
        measurementUnit: data.measurementUnit,
        meaurements: data.measurements,
        manufacturingCountry: data.manufacturingCountry,
        color: data.color,
        deaf: data.deaf,
        retrivalAndReplacing: data.retrivalAndReplacing,
        notes: data.notes,
        wareHouseCode: data.warehouseCode,
        specifications: data.productSpecifications,
        images: data.images, // If there are images
      });
    }
  }, [data]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert formData to match the API format
    const formattedData = {
      ProductId: id, // Assuming you want to send the ProductId explicitly
      SubCategoryId: formData.subCategoryId,
      Name: formData.name,
      Description: formData.description,
      Features: formData.features,
      Price: formData.price,
      MeasurementUnit: formData.measurementUnit,
      Meaurements: formData.meaurements,
      ManufacturingCountry: formData.manufacturingCountry,
      Color: formData.color,
      Deaf: formData.deaf,
      RetrivalAndReplacing: formData.retrivalAndReplacing,
      Notes: formData.notes,
      //   WareHouseCode: formData.wareHouseCode,
      //   Specifications: formData.specifications,
      //   Images: formData.images,
    };

    // Send the formatted data to the API
    await patchForm(formattedData, false);
    console.log("Updated Product Data:", formattedData);
  };

  return (
    <main className="p-main">
      <AccentText>تعديل المنتج</AccentText>
      <div className="max-w-3xl mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  اسم المنتج
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="اسم المنتج"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="wareHouseCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  رمز التخزين
                </label>
                <input
                  type="text"
                  name="wareHouseCode"
                  id="wareHouseCode"
                  value={formData.wareHouseCode}
                  onChange={handleInputChange}
                  placeholder="رمز التخزين"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  السعر
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="السعر"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="measurementUnit"
                  className="block text-sm font-medium text-gray-700"
                >
                  وحدة القياس
                </label>
                <input
                  type="text"
                  name="measurementUnit"
                  id="measurementUnit"
                  value={formData.measurementUnit}
                  onChange={handleInputChange}
                  placeholder="وحدة القياس"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  وصف المنتج
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="وصف المنتج"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="features"
                  className="block text-sm font-medium text-gray-700"
                >
                  مميزات المنتج
                </label>
                <textarea
                  name="features"
                  id="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  placeholder="مميزات المنتج"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-black"
              >
                تحديث المنتج
              </button>
            </form>

            <div className="mt-8">
              {formData.images.length > 0 && (
                <div className="space-y-4">
                  <p className="text-gray-700">صورة المنتج:</p>
                  <div className="flex space-x-4">
                    {formData.images.map((image, index) => (
                      <div
                        key={index}
                        className="w-32 h-32 overflow-hidden rounded-lg border border-gray-200"
                      >
                        <img
                          src={image.imagePath}
                          alt={`Product Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default AdminEditProductPage;
