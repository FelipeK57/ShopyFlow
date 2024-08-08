import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
const Dropdown = ({ data, name, defaultOption }) => {
  const [select, setSelect] = useState(defaultOption);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    setSelect(event.target.textContent);
    setOpen(false);
  };

  const toggle = () => setOpen(!open);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative p-2">
      <p>{name}</p>
      <button
        className="bg-gray-200 flex justify-between w-full items-center text-black rounded-xl p-2 shadow-lg focus:outline-none focus:ring-1 ring-gray-400 focus:bg-gray-300 hover:bg-gray-300 transition-all duration-200"
        onClick={toggle}
        aria-expanded={open}
      >
        {select}
        <svg
          className="w-2.5 h-2.5 ms-3 opacity-40"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {open && (
        <div
          className="absolute bg-gray-200 text-black text-sm rounded-xl p-1 mt-2 w-48 z-50"
          role="listbox"
        >
          <ul>
            <li
              onClick={handleClick}
              className="hover:bg-gray-300 p-2 rounded-xl cursor-pointer"
            >
              {defaultOption}
            </li>
            {data.map((item) => (
              <li
                className="hover:bg-gray-300 p-2 rounded-xl cursor-pointer"
                key={item.id}
                onClick={handleClick}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
};

export default Dropdown;
