import React, { useEffect, useState } from "react";

function randomColor() {
  const COLOR_LIST = ["red", "green", "yellow"];
  // random 0 -> 2
  const randomIndex = Math.trunc(Math.random() * 3);
  console.log(COLOR_LIST[randomIndex]);
  return COLOR_LIST[randomIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  //Change color everyone one second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log("First color: ", color);
      const newColor = randomColor();
      setColor(newColor);
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}
export default useMagicColor;
