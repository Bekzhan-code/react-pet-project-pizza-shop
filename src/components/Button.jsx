import classNames from "classnames";
import React from "react";

function Button({ children, className, outline }) {
  return (
    <button
      className={classNames("btn", className, { "btn--outline": outline })}
    >
      {children}
    </button>
  );
}

export default Button;
