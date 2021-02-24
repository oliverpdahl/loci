import React from 'react'
import {Table} from 'react-bootstrap'
import JourneyForm from './JourneyForm'

export default function JourneyContainer() {
    return (
        <Table bordered hover>
            <JourneyForm />
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
            </Table>
    )
}
