import { minusCircleIcon, plusCircleIcon } from ".";

const QuantityControls = () => {
  return (
    <div className="rounded-full flex bg-gray-200 gap-4 py-1 px-3">
      <button>
        <img src={plusCircleIcon} alt="" />
      </button>
      <span>1</span>
      <button>
        <img src={minusCircleIcon} alt="" />
      </button>
    </div>
  );
};

export default QuantityControls;
