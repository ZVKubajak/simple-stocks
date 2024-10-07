import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

interface TimeOptionsProps {
  onPeriodChange: (period: string) => void;
}

const TimeOptions = ({ onPeriodChange }: TimeOptionsProps) => {
  const [periodValue, setPeriodValue] = useState("1");

  const timePeriods = [
    { name: "1M", value: "1" },
    { name: "6M", value: "2" },
    { name: "YTD", value: "3" },
    { name: "1Y", value: "4" },
    { name: "2Y", value: "5" },
  ];

  const handleChange = (value: string) => {
    setPeriodValue(value);
    onPeriodChange(value);
  };

  return (
    <Row className="justify-content-center mt-6">
      <Col xs="7">
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
