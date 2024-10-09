import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import TimeOptions from "./TimeOptions";
import Form from "react-bootstrap/Form";

import { DataPoint } from "../components/LineChart";
import "../assets/css/css-layout/Sidebar.css";

interface SidebarProps {
  onDatesChange: (from: string, to: string) => void;
  selectedDataPoint: DataPoint | null;
}

const Sidebar = ({ onDatesChange, selectedDataPoint }: SidebarProps) => {
  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <Row>
      <Col>
        <TimeOptions onDatesChange={onDatesChange} />
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Advanced Statistics"
            onChange={toggleStats}
            checked={showStats}
          />
        </Form>
        {showStats && selectedDataPoint && (
          <section>
            <p>
              Time: {new Date(selectedDataPoint.timeStamp).toLocaleString()}
            </p>
            <p>Volume: {selectedDataPoint.volume}</p>
            <p>Average Price: {selectedDataPoint.avgPrice}</p>
            <p>Open Price: {selectedDataPoint.openPrice}</p>
            <p>Closed Price: {selectedDataPoint.closedPrice}</p>
            <p>Highest Price: {selectedDataPoint.highPrice}</p>
            <p>Lowest Price: {selectedDataPoint.lowPrice}</p>
            <p>Trade Count: {selectedDataPoint.tradeCount}</p>
          </section>
        )}
      </Col>
    </Row>
  );
};

export default Sidebar;
