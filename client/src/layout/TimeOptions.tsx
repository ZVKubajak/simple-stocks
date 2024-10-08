import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

interface TimeOptionsProps {
  onPeriodChange: (period: string) => void;
  onDatesChange: (from: string, to: string) => void;
}

const TimeOptions = ({ onPeriodChange, onDatesChange }: TimeOptionsProps) => {
  const [periodValue, setPeriodValue] = useState("4");

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

    const to = new Date();
    let from;

    switch (value) {
      case "1":
        from = new Date(to);
        from.setMonth(to.getMonth() - 1);
        break;
      case "2":
        from = new Date(to);
        from.setMonth(to.getMonth() - 6);
        break;
      case "3":
        from = new Date(to);
        from.setMonth(0);
        break;
      case "4":
        from = new Date(to);
        from.setFullYear(to.getFullYear() - 1);
        break;
      case "5":
        from = new Date(to);
        from.setFullYear(to.getFullYear() - 2);
        break;
      default:
        from = to;
    }

    const formatDate = (date: Date) => date.toISOString().split("T")[0];

    console.log("From Date:", formatDate(from), "To Date:", formatDate(to));

    onDatesChange(formatDate(from), formatDate(to));
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
