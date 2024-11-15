import React, { useState } from "react";
import {
  ButtonGold,
  closeCircleIcon,
  emailIcon,
  Link,
  phoneIcon,
  shattibLogoContactUs,
  TextInput,
  useApi,
} from "..";

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Using the useApi hook for POST requests
  const { postData, isLoading, data } = useApi<Response>("ContactUs", "POST");

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    await postData(formData);
  };

  return (
    <main className="h-screen w-screen p-main max-lg:p-4 bg-gray-300 flex justify-center items-center max-lg:h-max">
      <div className="absolute top-16 right-16 max-lg:top-4 max-lg:right-4">
        <Link to={"/home"}>
          <img src={closeCircleIcon} alt="" />
        </Link>
      </div>

      <section className="flex items-center gap-16 max-lg:flex-col-reverse max-lg:w-full max-lg:mt-16">
        <div className="flex flex-col gap-8 max-lg:w-full">
          <h1 className="text-2xl font-bold">تواصل معنا</h1>
          <div className="lg:w-96 max-lg:w-full">
            <TextInput
              placeholder="الاسم"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <TextInput
            placeholder="الرقم"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <TextInput
            placeholder="الايميل"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextInput
            big
            placeholder="الرسالة"
            name="message"
            onChange={handleInputChange}
            value={formData.message}
          />
          <ButtonGold onClick={handleSubmit}>
            {isLoading ? "إرسال..." : "إرسال"}
          </ButtonGold>

          {data && <p className="text-green-500">Message sent successfully!</p>}
        </div>
        <div className="w-1/2 flex flex-col gap-8 items-center">
          <img className="w-40" src={shattibLogoContactUs} alt="Shattib Logo" />
          <div className="flex gap-4 text-nowrap items-center">
            <img src={phoneIcon} alt="Phone" />
            <a
              href="https://wa.me/966501093007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-primary transition-colors duration-200 font-semibold"
              style={{ textDecoration: "none" }}
              dir="ltr"
            >
              +966 50 109 3007
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <img src={emailIcon} alt="Email" />
            <a
              href="mailto:support@shatib.com"
              className="text-gray-800 hover:text-primary transition-colors duration-200 font-semibold"
              style={{ textDecoration: "none" }}
              dir="ltr"
            >
              support@shatib.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
