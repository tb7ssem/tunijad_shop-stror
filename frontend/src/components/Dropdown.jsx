import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const categories = [
  "jeans",
  "t-shirts",
  "shoes",
  "glasses",
  "jackets",
  "suits",
  "bags",
  "phone",
];

function Dropdown() {
  const dropdownRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      setMenuVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [menuVisible]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex cursor-pointer text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
        onClick={toggleMenu}
      >
        <span>Categories</span>
      </div>
      {menuVisible && (
        <div className="absolute top-[2.8rem] w-[150px] flex flex-col gap-1 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.toLowerCase()}`}
              onClick={toggleMenu}
            >
              <div className="w-full py-1 px-2 text-gray-300 capitalize border-b border-emerald-800/0 hover:border-emerald-800/100 hover:bg-gray-800 transition duration-300 ease-in-out">
                {category}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
