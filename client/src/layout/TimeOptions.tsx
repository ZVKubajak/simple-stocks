import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const TimePeriodOptions = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1Y");

  const handleSelection = (timePeriod: string) => {
    setSelectedPeriod(timePeriod);
    console.log("Selectd Time Period:", timePeriod);
  };

  return <div></div>;
};
