import PropTypes from "prop-types";

const TextButton = ({ text }) => {
  return (
    <button className="bg-blue-600 text-white text-lg rounded-md p-3 font-semibold w-full shadow-lg focus:ring-2 focus:outline-none hover:bg-blue-700 transition-all duration-200">
      {text}
    </button>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextButton;
