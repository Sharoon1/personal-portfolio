import React from "react";

function Button({ text }) {
  return (
    <div>
      <button className="hover:bg-white bg-textColor text-white text-sm  font-bold px-10 py-3 border border-black rounded-md hover:text-black  p-4 hover:duration-300">
        {text}
      </button>
    </div>
  );
}

export default Button;
