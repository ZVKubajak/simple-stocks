import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const TimeOptions = () => {
  const [periodValue, setPeriodValue] = useState("1");

  const timePeriods = [
    { name: "1M", value: "1" },
    { name: "6M", value: "2" },
    { name: "YTD", value: "3" },
    { name: "1Y", value: "4" },
    { name: "2Y", value: "5" },
  ];

  return (
    <ButtonGroup>
      {timePeriods.map((timePeriod, idx) => (
        <ToggleButton
          key={idx}
          id={`timePeriod-${idx}`}
          type="radio"
          variant={"outline-success"}
          name="timePeriod"
          value={timePeriod.value}
          checked={periodValue === timePeriod.value}
          onChange={(e) => setPeriodValue(e.currentTarget.value)}
        >
          {timePeriod.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default TimeOptions;
