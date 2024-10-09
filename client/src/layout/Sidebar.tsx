// import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import TimeOptions from "./TimeOptions";

import { DataPoint } from "../components/LineChart";
import "../assets/css/css-layout/Sidebar.css";

interface SidebarProps {
  onDatesChange: (from: string, to: string) => void;
  onPointClick: (dataPoint: DataPoint) => void;
}

const Sidebar = ({ onDatesChange, onPointClick }: SidebarProps) => {
  return (
    <Row>
      <Col>
        <TimeOptions onDatesChange={onDatesChange} />
      </Col>
    </Row>
  );
}

export default Sidebar;
