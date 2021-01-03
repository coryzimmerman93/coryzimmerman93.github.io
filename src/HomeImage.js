import React, { Component } from 'react'
import { Row, Col, Container, Card } from "react-bootstrap";
import render_circle from './render_circle.PNG';

class HomeImage extends Component {
    render() {
      return (
        <Container fluid>
        <br></br>
          <Row>
            <Col>
              <Card className='customCard'>
                <Card.Body>
                  <Container>
                    <img src={render_circle} alt="render logo"></img>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='customCard'>
                <Card.Body>
                  <h1 style={{ fontWeight: 100 }}>render</h1> <br></br>
                  <p>Coming to the App store and Play store in the fall of 2021</p>
                  <p>A purpose-build social site for gamers.</p>
                  <p>For more info or to inquire about joining our development team, contact Cory at coryzimmerman93@gmail.com</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default HomeImage;