import React from 'react'
import {Tab, Nav, Col, Row, Card, Tabs} from 'react-bootstrap'
export default function Images({image}) {

    return (
        <div>
            <Card>
                <Card.Header>Images</Card.Header>
                <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>

                        <Tab.Pane eventKey="second">
                            {image.imageTitle}
                            {image.imagePlacement}
                            {image.imageDescription}
                            {image.imageMeaning}
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                </Card.Body>
            </Card>
        </div>
    )
}
