import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import useMagicColor from "../../Hooks/useMagicColor";

MagicBox.propTypes = {};

function MagicBox(props) {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
