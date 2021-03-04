import React from 'react'
import {Tab} from 'react-bootstrap'
export default function Images({image}) {
    return (
        <div>

            {image.imageTitle}
            {image.imagePlacement}
            {image.imageDescription}
            {image.imageMeaning}
        </div>
    )
}
