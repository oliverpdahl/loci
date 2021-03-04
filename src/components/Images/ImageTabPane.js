import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'

export default function ImageTabPane({image, index}) {
    return (
        <Tab.Pane eventKey={index}>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="placement" title="Placement">
                    <p></p><p>{image.imagePlacement}</p>
                </Tab>
                <Tab eventKey="description" title="Description">
                    <p></p><p>{image.imageDescription}</p>
                </Tab>
                <Tab eventKey="meaning" title="Meaning">
                    <p></p><p>{image.imageMeaning}</p>
                </Tab>
            </Tabs>                             
        </Tab.Pane>
    )
}
