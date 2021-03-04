import React from 'react'
import {Nav} from 'react-bootstrap'

export default function ImageNavItem({image, index}) {
    return (
        <Nav.Item>
            <Nav.Link eventKey={index}>{image.imageTitle}</Nav.Link>
        </Nav.Item>
    )
}
