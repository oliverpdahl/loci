import React, {useEffect, useState} from 'react'
import {database} from "../../firebase"
import JourneyWithButtons from "./JourneyWithButtons"
import {Accordion, Card} from 'react-bootstrap'

export default function JourneyList() {
    const [journeyList, setJourneyList] = useState()

    useEffect(() => {
        const journeyRef = database.ref('Journey')
        journeyRef.on('value', (snapshot) =>{
            const journeys = snapshot.val()
            const journeyList = []
            for(let id in journeys) {
                journeyList.push({id, ...journeys[id]})
            }
            setJourneyList(journeyList)
        })
    }, [])

    return (
        <Accordion>
            <Card bg='primary' text='light'>
                <Accordion.Toggle as={Card.Header} eventKey={0}>
                    <h4 className="mt-1" background='primary'>
                    Journeys
                    </h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={0}>
                <Card.Body>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            {journeyList ? journeyList.map((journey, index)=> (
                <JourneyWithButtons journey={journey} key={index} index={index}/>
            )): ""}
        </Accordion>

    )
}
