import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./components/home/Home";
import "../src/components/homeStyle.css"

export default function App() {
  return (
    
      <div>
        <Router>
        <Container >
          <Row className ='nav-color'>
            <Col className = 'nav-text-color nav-height '>
              <Link to="/" className= 'link-color'>Logo</Link>
            </Col>
            <Col className = 'nav-text-color nav-height'>
              <Link to="/" className= 'link-color'>Buy</Link>
            </Col>
            <Col className = 'nav-text-color nav-height'>
              <Link to="/" className= 'link-color'>Rent</Link>
            </Col>
            <Col className = 'nav-text-color nav-height'>
              <Link to="/" className= 'link-color'>Sell</Link>
            </Col>
            <Col className = 'nav-text-color nav-height'>
              <Link to="/" className= 'link-color'>Tool & Advice</Link>
            </Col>
            <Col className = 'nav-text-color nav-height'>
              <Link to="/" className= 'link-color'>What's New</Link>
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>

      </div>
  );
}
