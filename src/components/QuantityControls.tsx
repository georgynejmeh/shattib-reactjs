import { minusCircleIcon, plusCircleIcon, useState } from "..";

const QuantityControls = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="rounded-full flex items-center justify-center w-full bg-gray-200 gap-4 py-1 px-3">
      <button onClick={() => setCount(count + 1)}>
        <img src={plusCircleIcon} alt="" />
      </button>
      <span className="flex justify-center w-4">{count}</span>
      <button onClick={() => setCount(count - 1)}>
        <img src={minusCircleIcon} alt="" />
      </button>
    </div>
  );
};

export default QuantityControls;
