import React from "react";
import { render } from "react-dom";
import { useDispatch } from "react-redux";

const CounterButton = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  //ไอนี่คือ dispatch ข้างในบรรจุ action
  const handleChange = (id, title) => {
    dispatch({ type: "CHANGE", payload: { id, title } });
  };

  const items = [
    { id: 1, title: "item01" },
    { id: 2, title: "item02" }
  ];

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={(e) => {
              const data = e.target.value;
              console.log(item);
              handleChange(item.id, item.title);
            }}
          >
            vbvb {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CounterButton;
