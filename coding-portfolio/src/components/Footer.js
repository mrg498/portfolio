import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap';
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <Row className="Footer"> 
                <Col>
                    <h6 className="Footer-text">Miles Grossenbacher</h6>
                </Col>
                <Col>
                    <h6 className="Footer-text">mrg498@nyu.edu</h6>
                </Col>
                <Col>
                    <h6 className="Footer-text">https://github.com/mrg498</h6>
                </Col>
            </Row>
        )
    }
}
