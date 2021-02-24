import React, {useState} from 'react'
import {database} from  "../../firebase"
import {Button, InputGroup, FormControl} from 'react-bootstrap'

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
        <thead>
            <tr>
            <th>#</th>
            <td colSpan="2">
                <InputGroup className="">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="title"
                    aria-describedby="inputGroup-sizing-default"
                    type="text" onChange={handleOnChange} value={title}
                    />
                </InputGroup>
            </td>
            <th><Button onClick={createJourney} block>Add Journey</Button></th>
            </tr>
        </thead>
    )
}
