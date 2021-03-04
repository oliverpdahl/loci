import React from 'react'
import {Tab, Nav, Col, Row, Card, Tabs} from 'react-bootstrap'
import ImageNavItem from './ImageNavItem'
import ImageTabPane from './ImageTabPane'

export default function Images({images}) {
    const navItemMap = images ? images.map((image, index)=> (
        <ImageNavItem image={image} key={index} index={index}/>
    )): ''

    const tabPaneMap = images ? images.map((image, index)=> (
        <ImageTabPane image={image} index={index} key={index}/>
    )): ''
    return (
        <Card>
            <Card.Header>Images</Card.Header>
            <Card.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    {navItemMap}
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    {tabPaneMap}
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </Card.Body>
        </Card>
    )
}
