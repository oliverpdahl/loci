import React from 'react'
import {database} from '../../firebase'

export default function Journey({journey}) {
    const deleteJourney = () => {
        const journeyRef = database.ref('Journey').child(journey.id)
        journeyRef.remove()
    }
    const reviewJourney = () => {
        const journeyRef = database.ref('Journey').child(journey.id)
        journeyRef.update({reviewed: !journey.reviewed})
    }
    return (
        <div>
            <h1>{journey.reviewed ? "✓ " : " " }{journey.title}</h1>
            <button onClick={deleteJourney}>Delete</button>
            <button onClick={reviewJourney}>Complete</button>
        </div>
    )
}
