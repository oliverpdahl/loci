import React, {useState} from 'react'
import {database} from  "../../firebase"

export default function JourneyForm() {
    const [title, setTitle] = useState('')

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    };

    const createJourney = () => {
        const journeyRef = database.ref('Journey')
        const journey = {
            title,
            reviewed: false
        }

        journeyRef.push(journey)
    }
    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title} />
            <button onClick={createJourney}>Add Journey</button>
        </div>
    )
}
