import React from 'react'
import {Table} from 'react-bootstrap'
import JourneyForm from './JourneyForm'
import JourneyList from './JourneyList'
export default function JourneyContainer() {
    return (
        <Table bordered hover>
            <JourneyForm />
            <JourneyList />
        </Table>
    )
}
