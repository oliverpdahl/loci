import React from 'react'
import {Button, Table} from 'react-bootstrap'
import Image from '../Images/Image.js'

export default function Journey({journey}) {

    const reviewChar = journey.reviewed ? "● " : "○ " 

    const location = !!journey.location ? journey.location : ""

    const title = !!journey.title ? journey.title : ""

    const imagesMap = journey.images ? journey.images.map((image, index)=> (
        <tr><td><Image image={image} key={index}/></td></tr>
    )): ''

    return (
        <td colSpan='6'>
         <h4>{reviewChar}{title}{location}</h4>
        <Table bordered>
            <tr>
                <td colSpan='0.5' className='align-middle'>
                    <h4 className="px-2 pt-2 align-middle">
                        
                    </h4>
                </td>
                <td className='align-middle'>
                    <h4 className="px-2 pt-2 align-middle">
                        
                    </h4>
                </td>
                <td className='align-middle'>
                    <h4 className="px-2 pt-2 align-middle">
                        
                    </h4>
                </td>
            </tr>
            {imagesMap}
        </Table>
        </td>
    )
}
