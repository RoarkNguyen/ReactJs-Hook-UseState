import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

Colorbox.propTypes = {};

function Colorbox(props) {
  const [color, setColor] = useState("green");
  function handleColorRed() {
    console.log("red");
    setColor("red");
  }
  function handleColorYellow() {
    setColor("yellow");
  }
  function handleColorGreen() {
    setColor("Green");
  }
  return (
    <div>
      <Box bg={color} w="100%" p={4} color="white">
        This is the Box {color}
      </Box>
      <Box onClick={handleColorRed}>Change Red</Box>
      <Box onClick={handleColorYellow}>Change Yellow</Box>
      <Box onClick={handleColorGreen}>Change Green</Box>
    </div>
  );
}

export default Colorbox;
