import PropTypes from "prop-types";
import { useState } from "react";

const InputForm = ({ type, placeholder, textColor }) => {
  const [showPassword, setShowPassword] = useState(false);

  const changePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-left">
      <p className={textColor}>{placeholder}</p>
      <div className="flex items-center justify-end" >
        <input
          className="bg-[#FFFFF] rounded-md p-3 shadow-md w-full"
          type={type === "password" && showPassword ? "text" : type}
          required
          placeholder={placeholder}
        />
        {type === "password" && (
          <button className="absolute p-2 opacity-80" type="submit" onClick={changePasswordVisibility}>
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        )}
      </div>
    </div>
  );
};

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default InputForm;
