import React, {useState} from 'react'
import {database} from  "../../firebase"
import {Button, InputGroup, FormControl, Card, Alert} from 'react-bootstrap'
import Journey from "./Journey"
import Image from "../Images/Images"

export default function JourneyForm() {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [images, setImages] = useState([])
    const [imageTitle, setImageTitle] = useState('')
    const [imageDescription, setImageDescription] = useState('')
    const [imagePlacement, setImagePlacement] = useState('')
    const [imageMeaning, setImageMeaning] = useState('')

    const handleOnTitleChange = (e) => {
        setTitle(e.target.value)
    };

    const handleOnLocationChange = (e) => {
        setLocation(e.target.value)
    };

    const handleOnImageTitleChange = (e) => {
        setImageTitle(e.target.value)
    };

    const handleOnImageDescriptionChange = (e) => {
        setImageDescription(e.target.value)
    };

    const handleOnImagePlacementChange = (e) => {
        setImagePlacement(e.target.value)
    };

    const handleOnImageMeaningChange = (e) => {
        setImageMeaning(e.target.value)
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
            imageTitle,
            imageDescription,
            imagePlacement,
            imageMeaning
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
        setImagePlacement("")
        setImageMeaning("")
        setImageDescription("")
    }

    const imageBelow = (!!imageTitle || !!imageDescription || !!imageMeaning) ? 
        <div>
            <Image image={{imageDescription:imageDescription, imageTitle:imageTitle, imageMeaning:imageMeaning, imagePlacement:imagePlacement}}/>
            <Alert variant="warning">Click Add Image to add this image below!</Alert>
        </div> : ""

    const journeyBelow = (images.length > 0 || !!title || !!location) ? 
        <div>
            <Journey journey={{title: title, location:location, images:images}}/>
            <Alert variant="warning">Click Add Journey to add this journey below! Make sure to add any images first.</Alert>
        </div> : ""
    
    return (
        <Card border="primary" className="mt-3">
            <Card.Header><h4 className="pt-1">Journey</h4></Card.Header>
            <Card.Body>
                <InputGroup size='lg'> 
                    <InputGroup.Prepend>
                    <InputGroup.Text>Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="title"
                    type="text" onChange={handleOnTitleChange} value={title}
                    />
                </InputGroup>
                <InputGroup size='lg' className="mt-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>Location</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="location"
                    type="text" onChange={handleOnLocationChange} value={location}
                    />
                </InputGroup>
                <Card border="primary" className="mt-3">
                    <Card.Header><h5 className="pt-2">Image</h5></Card.Header>
                    <Card.Body>
                        <InputGroup size='md'>
                            <InputGroup.Prepend>
                            <InputGroup.Text>Title</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            aria-label="imageTitle"
                            type="text" onChange={handleOnImageTitleChange} value={imageTitle}
                            />
                        </InputGroup>
                        <InputGroup size='md' className="mt-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>Placement</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            aria-label="imagePlacement"
                            type="text" onChange={handleOnImagePlacementChange} value={imagePlacement}
                            />
                        </InputGroup>
                        <InputGroup size='md' className="mt-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>Description</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            aria-label="imageDescription"
                            as="textarea" onChange={handleOnImageDescriptionChange} value={imageDescription}
                            />
                        </InputGroup>
                        <InputGroup size='md' className="mt-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>Meaning</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            aria-label="imageMeaning"
                            as="textarea" onChange={handleOnImageMeaningChange} value={imageMeaning}
                            />
                        </InputGroup>
                        {imageBelow}
                        <Button onClick={handleOnImageSubmit} block type='submit' size='md' className="mt-3" variant='outline-primary'>Add Image</Button>
                    </Card.Body>
                </Card>
                    {journeyBelow}
                    <Button onClick={handleOnSubmit} block type='submit' size='lg' className="mt-3">Add Journey</Button>
            </Card.Body>
        </Card>
    )
}
