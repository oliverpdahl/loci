import React from 'react'
import {database} from '../../firebase'
import {Button, Table, Card, Accordion, Badge} from 'react-bootstrap'
import Images from '../Images/Images'

export default function JourneyWithButtons({journey, index}) {
    const deleteJourney = () => {
        const journeyRef = database.ref('Journey').child(journey.id)
        journeyRef.remove()
    }
    const reviewJourney = () => {
        const journeyRef = database.ref('Journey').child(journey.id)
        journeyRef.update({reviewed: !journey.reviewed})
    }

    const reviewVariant = journey.reviewed ? "success" : "light"

    const reviewChar = journey.reviewed ? <Badge variant='success'>●</Badge> : <Badge variant='warning'>○</Badge> 

    const location = !!journey.location ? journey.location : ""

    const title = !!journey.title ? journey.title : ""

    const images = journey.images ? <Images images={journey.images}/> : ''

    const newIndex = !!index ? index+1 : 1

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={newIndex}>
                <h4>{reviewChar}       {title} - {location}</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={newIndex}>
            <Card.Body>
                {images}
                <Button onClick={deleteJourney} variant="danger" block>Delete</Button>
                <Button onClick={reviewJourney} variant={reviewVariant} block>Review</Button>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
