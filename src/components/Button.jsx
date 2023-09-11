import classNames from "classnames";
import React from "react";

function Button({ children, className, outline, onClick }) {
  return (
    <button
      className={classNames("btn", className, { "btn--outline": outline })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
