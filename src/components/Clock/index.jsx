import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/react";
import useClock from "../../Hooks/useClock";

Clock.propTypes = {};

function Clock(props) {
  const { timeString } = useClock();
  return (
    <div>
      <Heading>Clock ne </Heading>
      <Heading size="lg">{timeString}</Heading>
    </div>
  );
}

export default Clock;
