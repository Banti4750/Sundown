import React, { useState } from "react";

const InputAnimation = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (


      <div className="relative  h-16 overflow-hidden">
        <input
          type="text"
          name="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full h-full pt-5 bg-[#FE330A] text-lg text-gray-300 border-none outline-none"
          required
        />
        <label
          className={`absolute inset-0 pointer-events-none border-b border-white ${
            isFocused || inputValue
              ? "after:translate-x-0 after:border-yellow-300"
              : "after:translate-x-full"
          } after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-full after:border-b-2 after:transition-transform after:duration-300`}
        >
          <span
            className={`absolute bottom-0 left-0 pb-1 text-gray-300 text-lg transition-all duration-300 ${
              isFocused || inputValue
                ? "translate-y-[-150%] text-yellow-300 text-sm"
                : ""
            }`}
          >
           Email Address
          </span>
        </label>
      </div>

  );
};

export default InputAnimation;
