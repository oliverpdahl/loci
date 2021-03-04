import React from 'react'
import {Table} from 'react-bootstrap'
import JourneyForm from './JourneyForm'
import JourneyList from './JourneyList'
import {Card, Accordion} from 'react-bootstrap'
export default function JourneyContainer() {
    return (
        <div>
            <JourneyForm />
            <div className='my-4'>
                <JourneyList />
            </div>
        </div>
    )
}
