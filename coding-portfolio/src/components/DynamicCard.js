import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./DynamicCard.css";

export default class DynamicCard extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.card_src} alt="thumbnail image for portfolio project"/>
                <Card.Body>
                    <Card.Title>{this.props.card_title}</Card.Title>
                    <Card.Text>
                        {this.props.card_text}
                    </Card.Text>
                    <Button variant="secondary">
                        <Link to='/webdev'>View Project</Link>
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}
