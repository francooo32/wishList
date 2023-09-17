import React from 'react';
import { Row, Col } from "react-bootstrap";
import Kms from "../../selectelements/kms.jsx"
import "./kmselect.css"

const KmSelect = () => {

  return (
    <>
    <div id="selectDivMain">
    <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='modelDiv'>
            <h1>
              Indicanos el kilometraje aproximado
            </h1>
          </div>
          <Kms />
        </Col>
    </Row>
    </div>
    </>
  );
}

export default KmSelect