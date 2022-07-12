import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return (
    <button style={{ color: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;

//line 9: first set of {} is value of the prop.(it could be boolean, string, etc)
//and the second set {} is an object here
