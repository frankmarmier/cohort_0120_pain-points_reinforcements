import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/buttons.scss";

const Button = ({
  sign,
  isSuccess,
  handleClick,
  isFontAwesome,
  className,
  children
}) => {
  let classes = "btn btn-counter ";
  classes += isSuccess ? "is-success" : "is-danger";

  if (!isFontAwesome) {
    return (
      <button className={"btn " + className} onClick={handleClick}>
        {children}
      </button>
    );
  }

  return (
    <button onClick={handleClick} className={classes}>
      <FontAwesomeIcon icon={sign} />
    </button>
  );
};

export default Button;
