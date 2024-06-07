import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Navbar, Nav, Image, Row, Col, Badge, Button } from 'react-bootstrap';

import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef } from 'react';

import ImgLogo from './images/logo.svg';
import ImgIll from './images/illustration-devices.svg';


const MainPage = () => {
    return (
        <Container fluid>
            <Navbar expand='lg' fixed='top'>
                <Container>
                    <Navbar.Brand><Image src={ImgLogo} alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className='ms-auto align-items-center'>
                            <Nav.Link>Product</Nav.Link>
                            <Nav.Link>Features</Nav.Link>
                            <Nav.Link>Pricing</Nav.Link>
                            <span className='cs-devider mx-4'></span>
                            <Nav.Link>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className='cs-h mt-5 mt-lg-0'>
                <Row className='cs-h ms-5'>
                    <Col className='my-auto'>
                        <h1 className='cs-text-color-2 cs-fw-400 text-uppercase'><Badge className='rounded-pill fw-bold cs-badge'>New</Badge> Monograph Dashboard</h1>
                        <h2 className='display-1 cs-fw-700 cs-text-color'>Powerful insights into your team</h2>
                        <p className='cs-text-color-2 cs-fw-400 h5'>Project planning and time tracking for agile teams</p>
                        <Container fluid className='d-flex flex-row px-0 align-items-center'>
                            <Button variant='custom' className='cs-btn text-white px-3 py-2 cs-fw-700 text-uppercase me-3'>Schedule a demo</Button>
                            <h3 className='h5 my-0 cs-text-color-2 cs-fw-400 text-uppercase'>to see a live preview</h3>
                        </Container>
                    </Col>
                    <Col className='my-auto'>
                        <Image fluid src={ImgIll} alt='illustartion' />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default MainPage;