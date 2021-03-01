import React, {useState} from 'react'
import {database} from  "../../firebase"
import {Button, InputGroup, FormControl} from 'react-bootstrap'

export default function JourneyForm() {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')

    const handleOnTitleChange = (e) => {
        setTitle(e.target.value)
    };

    const handleOnLocationChange = (e) => {
        setLocation(e.target.value)
    };

    const createJourney = () => {
        const journeyRef = database.ref('Journey')
        const journey = {
            title,
            location,
            reviewed: false
        }

        journeyRef.push(journey)
    }

    const handleOnSubmit = (e) => {
        createJourney()
        setTitle("")
        setLocation("")
    }
    return (
        <thead>
            <tr>
            <th colSpan="6">
                {/* TODO Make this more elegant */}
                <InputGroup size='lg'> 
                    <InputGroup.Prepend>
                    <InputGroup.Text>Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="title"
                    type="text" onChange={handleOnTitleChange} value={title}
                    />
                </InputGroup>
                <InputGroup size='lg'>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Location</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="location"
                    type="text" onChange={handleOnLocationChange} value={location}
                    />
                </InputGroup>
            </th>
            <th colSpan="2"><Button onClick={handleOnSubmit} block type='submit' size='lg'>Add Journey</Button></th>
            </tr>
        </thead>
    )
}
