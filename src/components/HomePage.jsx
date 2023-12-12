import React from 'react'
import { Row, Col } from 'react-bootstrap'
import port from './portpolio.png';

const HomePage = () => {
    return (

        <Row className='my-5 text-center'>
            <Col>
                <img src={port} alt="포트폴리오"
                    width="90%"
                    
                     />
            </Col>
        </Row>

    )
}

export default HomePage