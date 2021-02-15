import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@chakra-ui/react";
import "./style.scss";

Colorbox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function Colorbox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log("initColor", initColor);

    return initColor;
  });
  function handleBoxClick() {
    //get random color => set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div>
      <Box className="colorBox" bg={color} w="100%" p={4} color="white">
        This is the Box {color}
      </Box>
      <Box>
        <Button className="button" onClick={handleBoxClick}>
          Radom Color
        </Button>
      </Box>
    </div>
  );
}

export default Colorbox;
