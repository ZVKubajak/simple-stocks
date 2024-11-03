import { ListGroup } from "react-bootstrap";
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
              <ListGroup id="list-group">
                <ListGroup.Item action>
                  Time: {new Date(selectedDataPoint.timeStamp).toLocaleDateString("en-US")}
                </ListGroup.Item>
                <ListGroup.Item action>
                  Volume: {(selectedDataPoint.volume).toLocaleString()} Shares
                </ListGroup.Item>
                <ListGroup.Item action>
                  Average Price: ${(selectedDataPoint.avgPrice).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item action>
                  Open Price: ${(selectedDataPoint.openPrice).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item action>
                  Closed Price: ${(selectedDataPoint.closedPrice).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item action>
                  Highest Price: ${(selectedDataPoint.highPrice).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item action>
                  Lowest Price: ${(selectedDataPoint.lowPrice).toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item action>
                  Trade Count: {(selectedDataPoint.tradeCount).toLocaleString()} Trades
                </ListGroup.Item>
              </ListGroup>
            ) : (
              <p id="stat-message">Select a data point.</p>
            )
          ) : null}
        </section>
      </Col>
    </Row>
  );
};

export default Sidebar;
