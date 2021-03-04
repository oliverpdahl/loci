import React from 'react'

export default function Image({image}) {
    return (
        <div>
            {image.imageTitle}
            {image.imagePlacement}
            {image.imageDescription}
            {image.imageMeaning}
        </div>
    )
}
