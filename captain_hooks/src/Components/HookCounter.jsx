import React, { useState } from "react";
import Button from "./Button";
import "../styles/card.scss";

const HookCounter = props => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = e => setCounter(counter + 1);
  const handleDecrement = e => setCounter(counter - 1);

  return (
    <aside className="card">
      <h1 className="card__title">Hook Counter</h1>
      <hr />
      <div className="card__controls">
        <Button
          handleClick={handleIncrement}
          sign="plus"
          isSuccess
          isFontAwesome
        />
        <Button handleClick={handleDecrement} sign="minus" isFontAwesome />
      </div>
      <h3 className="card__description">Counter value:</h3>
      <p className="card__macro">
        <b>{counter}</b>
      </p>
    </aside>
  );
};

export default HookCounter;
