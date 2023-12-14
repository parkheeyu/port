import React from 'react'
import { Row, Col } from 'react-bootstrap';
import cer1 from '../images/Certificate/Certificate1.png';
import cer2 from '../images/Certificate/Certificate2.png';

const Certificate = () => {
  return (
    <div>
      
      <Row className='justify-content-center my-5'>
        <Col xs={6} md={5}>
          <img src={cer1} alt="증명서 1" className="img-fluid"   />
        </Col>
        <Col xs={6} md={5}>
          <img src={cer2} alt="증명서 2" className="img-fluid" />
        </Col>
      </Row>
    </div>
  )
}

export default Certificate