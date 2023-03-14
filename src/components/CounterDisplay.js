import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state) => state.count);
  const displayDataBtn = useSelector((state) => state.item1);

  //function
  const handleChange = () => {
    console.log("handleChanged");
  };

  return (
    <>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={(e) => {
            console.log(
              "คลิกที่ปุ่ม หัวข้อ",
              e.target.textContent,
              "for update state"
            );
            handleChange();
          }}
        >
          1)ID: {displayDataBtn.id} NAME: {displayDataBtn.title}
        </button>
      </div>
    </>
  );
};

export default CounterDisplay;
