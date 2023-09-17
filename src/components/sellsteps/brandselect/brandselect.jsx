import React from 'react';
import { Row, Col } from "react-bootstrap";
import Brands from "../../selectelements/brands.jsx"
import "./brandselect.css"

const BrandSelect = () => {

  return (
    <>
    <div id="selectDivMain">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12}>
          <div className='brandDiv'>
            <h1>
              Elegí la marca de tu auto
            </h1>
          </div>
              <Brands />
        </Col>
      </Row>
    </div>
    </>
    );
}

export default BrandSelect