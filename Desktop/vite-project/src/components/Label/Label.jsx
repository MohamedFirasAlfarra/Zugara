import React from "react";

const Label = ({ htmlfor, children, className }) => {
  return (
    <>
      <label
        htmlFor={htmlfor}
        className={`block text-base text-gray-700 font-bold mb-1.5 ${className}`}
      >
        {children}
      </label>
    </>
  );
};

export default Label;
