import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import "../assets/css/css-layout/TimeOptions.css";

interface TimeOptionsProps {
  onDatesChange: (from: string, to: string) => void;
}

const TimeOptions = ({ onDatesChange }: TimeOptionsProps) => {
  // console.log("TimeOptions.tsx rendered.");
  const [periodValue, setPeriodValue] = useState("4"); // Default to 1 year

  const timePeriods = [
    { name: "1M", value: "1" },
    { name: "6M", value: "2" },
    { name: "YTD", value: "3" },
    { name: "1Y", value: "4" },
    { name: "2Y", value: "5" },
  ];

  const handleChange = (value: string) => {
    setPeriodValue(value);

    const to = new Date();
    let from: Date;

    if (value === "1") {
      from = new Date(to);
      from.setMonth(to.getMonth() - 1);
    } else if (value === "2") {
      from = new Date(to);
      from.setMonth(to.getMonth() - 6);
    } else if (value === "3") {
      from = new Date(to);
      from.setMonth(0); // Start from the beginning of the year
    } else if (value === "4") {
      from = new Date(to);
      from.setFullYear(to.getFullYear() - 1);
    } else if (value === "5") {
      from = new Date(to);
      from.setFullYear(to.getFullYear() - 2);
    } else {
      from = to;
    }

    const formatDate = (date: Date) => date.toISOString().split("T")[0];

    // console.log("From Date:", formatDate(from), "To Date:", formatDate(to));

    onDatesChange(formatDate(from), formatDate(to));
  };

  useEffect(() => {
    handleChange(periodValue);
  }, []);

  // console.log("End of TimeOptions.tsx.");

  return (
    <Row className="justify-content-center">
      <Col xs="10">
        <ButtonGroup>
          {timePeriods.map((timePeriod, idx) => (
            <ToggleButton
              key={idx}
              id={`timePeriod-${idx}`}
              type="radio"
              variant={"outline-success"}
              name="timePeriod"
              className="toggle-button"
              value={timePeriod.value}
              checked={periodValue === timePeriod.value}
              onChange={() => handleChange(timePeriod.value)}
            >
              {timePeriod.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default TimeOptions;