import PropTypes from "prop-types";

const TextButton = ({ text }) => {
  return (
    <button className="bg-[#0369A1] text-white rounded-md p-3 font-semibold w-full shadow-md">
      {text}
    </button>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextButton;
