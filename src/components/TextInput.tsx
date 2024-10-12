import { useState, eyeIcon } from ".";

interface Props {
  title?: string;
  icon?: string;
  password?: boolean;
  placeholder?: string;
  blackTitle?: boolean;
}

const TextInput = ({
  title,
  icon,
  password = false,
  placeholder = "",
  blackTitle = false,
}: Props) => {
  const [hidden, setHidden] = useState(password);
  return (
    <>
      <div className="flex flex-col">
        <label
          className={
            blackTitle
              ? "flex self-start mb-2 text-sm"
              : "flex self-start mb-2 text-gray-400 text-sm font-medium"
          }
        >
          {title}
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <img src={icon} />
          </span>
          <input
            type={hidden ? "password" : "text"}
            className={
              icon
                ? "w-full py-3 pl-10 pr-10 text-gray-700 bg-white border rounded-md focus:outline-none focus:border-amber-400"
                : "w-full py-3 pl-10 pr-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:border-amber-400"
            }
            placeholder={placeholder}
          />
          {password ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img onClick={() => setHidden(!hidden)} src={eyeIcon} />
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TextInput;
