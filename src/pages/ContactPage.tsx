import {
  ButtonGold,
  emailIcon,
  phoneIcon,
  shattibLogoCol,
  TextInput,
} from "..";

const ContactPage = () => {
  return (
    <main className="h-screen w-screen p-main bg-gray-300 flex justify-center items-center max-lg:h-max">
      <section className="flex items-center gap-16 max-lg:flex-col">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">تواصل معنا</h1>
          <div className="lg:w-96">
            <TextInput placeholder="الاسم" />
          </div>
          <TextInput placeholder="الرقم" />
          <TextInput placeholder="الايميل" />
          <TextInput big placeholder="الرسالة" />
          <ButtonGold>إرسال</ButtonGold>
        </div>
        <div className="w-1/2 flex flex-col gap-8">
          <img src={shattibLogoCol} alt="" />
          <div className="flex gap-4">
            <img src={phoneIcon} alt="" />
            <span dir="ltr">+966111111111</span>
          </div>
          <div className="flex gap-4">
            <img src={emailIcon} alt="" />
            <span dir="ltr">shattibsa@gmail.com</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
