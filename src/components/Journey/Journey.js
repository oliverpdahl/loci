import React from 'react'
import {database} from '../../firebase'
import {Button} from 'react-bootstrap'

export default function Journey({journey}) {
    const deleteJourney = () => {
        const journeyRef = database.ref('Journey').child(journey.id)
        journeyRef.remove()
    }
    const reviewJourney = () => {
        const journeyRef = database.ref('Journey').child(journey.id)
        journeyRef.update({reviewed: !journey.reviewed})
    }

    const reviewVariant = journey.reviewed ? "success" : "light"
    return (
        <tr>
            <td colSpan="6">{journey.reviewed ? "✓ " : " " }{journey.title}</td>
            <td colSpan='1'><Button onClick={deleteJourney} variant="danger" block>Delete</Button></td>
            <td colspan='1'><Button onClick={reviewJourney} variant={reviewVariant} block>Review</Button></td>
        </tr>
    )
}
