import React from 'react';
import { Row, Col } from "react-bootstrap";
import Years from "../../selectelements/years.jsx"
import "./yearselect.css"

const YearSelect = () => {

  return (
    <>
    <Row className="aligh-items-center">
      <Col xs={12} md={12} xl={12}>
        <div className='yearDiv'>
          <h1>
            Elegí el año de tu vehículo
          </h1>
        </div>
            <Years />
      </Col>
    </Row>
    </>
  );
}

export default YearSelect