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
        setTitle('CatCat')
    }

    const handleOnSubmit = (e) => {
        createJourney()
        setTitle("")
    }
    return (
        <thead>
            <tr>
            <th colSpan="6">
                <InputGroup size='lg'>
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="title"
                    aria-describedby="inputGroup-sizing-default"
                    type="text" onChange={handleOnChange} value={title}
                    />
                </InputGroup>
            </th>
            <th colSpan="2"><Button onClick={handleOnSubmit} block type='submit' size='lg'>Add Journey</Button></th>
            </tr>
        </thead>
    )
}
