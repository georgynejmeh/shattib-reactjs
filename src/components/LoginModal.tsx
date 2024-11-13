import { ButtonGold } from "..";
import { useLoginModal } from "../hooks/useLoginModal";

const LoginModal = () => {
  const { isShownLoginModal, setIsShownLoginModal } = useLoginModal();

  if (isShownLoginModal) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return isShownLoginModal ? (
    <div className="fixed z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
      <div className="w-1/3 h-1/3 bg-white rounded-xl flex flex-col items-center justify-center gap-6 text-center max-lg:w-1/2">
        <h1 className="text-2xl">هل أنت متأكد من حذف هذا المنتج؟</h1>
        <div className="flex gap-4">
          <div className="w-40">
            <ButtonGold>تسجيل دخول</ButtonGold>
          </div>
          <button
            className="rounded bg-gray-200 w-20 py-1 px-3"
            onClick={() => setIsShownLoginModal(false)}
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;
