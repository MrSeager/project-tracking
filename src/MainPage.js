import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Navbar, Nav, Image, Row, Col, Badge, Button, Fade } from 'react-bootstrap';

import autoAnimate from '@formkit/auto-animate';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useRef } from 'react';

import ImgLogo from './images/logo.svg';
import ImgIll from './images/illustration-devices.svg';
import ImgHum from './images/icon-hamburger.svg';


const MainPage = () => {
    return (
        <Container fluid>
            <Navbar expand='lg' style={{ position: 'absolute', zIndex: 1000 }} className='slide-top w-100 px-5'>
                <Container>
                    <Navbar.Brand><Image src={ImgLogo} alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle className='cs-toggle'><Image src={ImgHum} alt='humburger' /></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className='cs-navbar rounded mt-3 mt-lg-0 ms-auto align-items-center cs-fw-700 text-uppercase'>
                            <Nav.Link className='cs-text-color'>Product</Nav.Link>
                            <Nav.Link className='cs-text-color'>Features</Nav.Link>
                            <Nav.Link className='cs-text-color'>Pricing</Nav.Link>
                            <span className='cs-devider mx-4 my-2 my-lg-0'></span>
                            <Nav.Link className='cs-text-color-2'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className='cs-h mt-0 pe-0'>
                <Row className='cs-h my-0 ms-lg-5 mb-5 mb-lg-0'>
                    <Col lg={{ order: 1, span: 6 }}
                         xs={{ order: 2, span: 12 }}
                         className='slide-left-col my-auto mx-5 mx-lg-0 pe-5'>
                        <h1 className='cs-text-color-2 cs-spacing cs-fw-400 h4 text-uppercase'><Badge bg='custom' className='cs-badge rounded-pill fw-bold'>New</Badge> Monograph Dashboard</h1>
                        <h2 className='display-1 cs-fw-700 cs-text-color text-uppercase'>Powerful insights into your team</h2>
                        <p className='cs-text-color-2 cs-fw-400 h5'>Project planning and time tracking for agile teams</p>
                        <Container fluid className='w-100 mt-5 d-flex flex-row px-0 align-items-center'>
                            <Button className='cs-btn border-0 text-white px-4 py-2 cs-fw-700 text-uppercase me-3'>Schedule a demo</Button>
                            <h3 className='h5 my-0 cs-text-color-2 cs-fw-400 text-uppercase'>to see a live preview</h3>
                        </Container>
                    </Col>
                    <Col fluid lg={{ order: 2, span: 6 }}
                         xs={{ order: 1, span: 12 }} 
                         className='slide-right-col cs-h cs-bg-pt d-flex flex-column justify-content-center pb-5 mb-5 mb-lg-0'>
                        <Image src={ImgIll} alt='illustartion' className='cs-img-slide mt-5 mt-lg-0' />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default MainPage;