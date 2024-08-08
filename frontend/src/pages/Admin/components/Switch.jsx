import { useState } from "react";   
const Switch = ({state}) => {
  const [checked, setChecked] = useState(state);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <button
      onClick={handleChange}
      className={`w-12 h-6 rounded-full shadow-md flex p-[2px] bg-green-500 transition-all duration-300 ${
        checked ? "justify-end" : "justify-start"
      } ${checked ? "bg-green-500" : "bg-red-500"}`}
    >
      <div className="flex w-5 h-5 bg-gray-200 rounded-full shadow-md"></div>
    </button>
  );
};

export default Switch;
