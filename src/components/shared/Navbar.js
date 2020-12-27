import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../homeStyle.css'

function Navbar() {
    return (
      <div className = 'nav-color nav-height' fluid='md'>
        <Container>
          <Row>
            <Col className ='nav-text-color'>
              Test1
            </Col>
            <Col className = 'nav-text-color'>
             Test 2
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Navbar
