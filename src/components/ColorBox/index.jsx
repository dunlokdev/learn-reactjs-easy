import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);

  return COLOR_LIST[randomIndex];
}
function ColorBox(props) {
  // const initColor = localStorage.getItem("color_box") || "deeppink";
  // console.log(initColor);

  // ! Khắc phục tình trạng initColor nhiều lần mỗi khi render lại
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color_box") || "deeppink";
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    // get random color
    const newColor = getRandomColor();

    setColor(newColor);
    localStorage.setItem("color_box", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      Click me
    </div>
  );
}

export default ColorBox;
