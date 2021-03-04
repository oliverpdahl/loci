import React from 'react'
import {database} from '../../firebase'
import {Button, Table, Card, Accordion} from 'react-bootstrap'
import Images from '../Images/Images'

export default function JourneyWithoutButtons({journey, index}) {
    const reviewVariant = journey.reviewed ? "success" : "light"

    const reviewChar = journey.reviewed ? "● " : "○ " 

    const location = !!journey.location ? journey.location : ""

    const title = !!journey.title ? journey.title : ""

    const images = journey.images ? <Images images={journey.images}/> : ''

    const newIndex = !!index ? index+1 : 1

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={newIndex}>
                {reviewChar}{title}{location}{newIndex}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={newIndex}>
            <Card.Body>
                {images}
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
