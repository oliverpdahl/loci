import React, {useState} from 'react'
import {database} from  "../../firebase"
import {Button, InputGroup, FormControl} from 'react-bootstrap'

export default function JourneyForm() {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [images, setImages] = useState([])
    const [imageTitle, setImageTitle] = useState('')

    const handleOnTitleChange = (e) => {
        setTitle(e.target.value)
    };

    const handleOnLocationChange = (e) => {
        setLocation(e.target.value)
    };

    const handleOnImageTitleChange = (e) => {
        setImageTitle(e.target.value)
    };

    const createJourney = () => {
        const journeyRef = database.ref('Journey')
        const journey = {
            title,
            location,
            images,
            reviewed: false
        }

        journeyRef.push(journey)
    }

    const createImage = () => {
        const image = {
            imageTitle
        }
        setImages([image, ...images])
    }

    const handleOnSubmit = (e) => {
        createJourney()
        setTitle("")
        setLocation("")
    }

    const handleOnImageSubmit = (e) => {
        createImage()
        setImageTitle("")
    }
    
    return (
        <thead>
            <tr>
            <th colSpan="6">
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
                <InputGroup size='lg'>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Image Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="imageTitle"
                    type="text" onChange={handleOnImageTitleChange} value={imageTitle}
                    />
                </InputGroup>
                <Button onClick={handleOnImageSubmit} block type='submit' size='lg'>Add Image</Button>
            </th>
            <th colSpan="2"><Button onClick={handleOnSubmit} block type='submit' size='lg'>Add Journey</Button></th>
            </tr>
        </thead>
    )
}
