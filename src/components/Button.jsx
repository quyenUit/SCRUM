import React from "react";

const Button = (props) => {
  return (
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
