import { Row, Col } from "react-bootstrap";
import TimeOptions from "./TimeOptions";
import Form from "react-bootstrap/Form";

import { SidebarProps } from "../utils/types/clientTypes";
import "../assets/css/css-layout/Sidebar.css";

const Sidebar = ({
  onDatesChange,
  toggleStats,
  showStats,
  selectedDataPoint,
}: SidebarProps) => {
  return (
    <Row id="sidebar-container">
      <Col className="mt-3">
        <TimeOptions onDatesChange={onDatesChange} />
        <Form className="d-flex justify-content-center mt-3" id="stat-switch">
          <Form.Check
            type="switch"
            label="Advanced Statistics"
            onChange={toggleStats}
            checked={showStats}
          />
        </Form>
        <section id="advanced-stats" className={showStats ? "show" : ""}>
          {showStats ? (
            selectedDataPoint ? (
              <div>
                <p>
                  Time: {new Date(selectedDataPoint.timeStamp).toLocaleString()}
                </p>
                <p>Volume: {selectedDataPoint.volume}</p>
                <p>Average Price: ${selectedDataPoint.avgPrice}</p>
                <p>Open Price: ${selectedDataPoint.openPrice}</p>
                <p>Closed Price: ${selectedDataPoint.closedPrice}</p>
                <p>Highest Price: ${selectedDataPoint.highPrice}</p>
                <p>Lowest Price: ${selectedDataPoint.lowPrice}</p>
                <p>Trade Count: {selectedDataPoint.tradeCount}</p>
              </div>
            ) : (
              <p>Select a data point.</p>
            )
          ) : null}
        </section>
      </Col>
    </Row>
  );
};

export default Sidebar;
