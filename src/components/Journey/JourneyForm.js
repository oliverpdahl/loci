import React, {useState} from 'react'
import {database} from  "../../firebase"
import {Button, InputGroup, FormControl, Card, Alert, Accordion} from 'react-bootstrap'
import Images from "../Images/Images"
import JourneyWithoutButtons from './JourneyWithoutButtons'

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
            <div className='mt-2'>
                Image Preview
            </div>
            <div className="mt-2">
                <Images images={[{imageDescription:imageDescription, imageTitle:imageTitle, imageMeaning:imageMeaning, imagePlacement:imagePlacement}]}/>
            </div>
            <div className="mt-2">
                <Alert variant="warning">Click Add Image to add this image below!</Alert>
            </div>
        </div> : ""

    const journeyBelow = (images.length > 0 || !!title || !!location) ? 
        <div>
        <div className='mt-2'>
            <Accordion>
                <Card bg='primary' text='light'>
                    <Accordion.Toggle as={Card.Header} eventKey={0}>
                        <h4 className="mt-1" background='primary'>
                        Journeys (Preview)
                        </h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={0}>
                    <Card.Body>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <JourneyWithoutButtons journey={{title: title, location:location, images:images}} index={0}/>
            </Accordion>
        </div>
        <div className='mt-2'>
            <Alert variant="warning">Click Add Journey to add this journey below! Make sure to add any images first.</Alert>
        </div> 
        </div>
        : ""
    
    return (
        <Card border="primary" className="mt-3">
            <Card.Header><h4 className="pt-1">New Journey</h4></Card.Header>
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
                    <Card.Header><h5 className="pt-2">New Image</h5></Card.Header>
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
