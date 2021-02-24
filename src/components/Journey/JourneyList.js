import React, {useEffect, useState} from 'react'
import {database} from "../../firebase"
import Journey from "./Journey"

export default function JourneyList() {
    const [journeyList, setJourneyList] = useState()

    useEffect(() => {
        const journeyRef = database.ref('Journey')
        journeyRef.on('value', (snapshot) =>{
            const journeys = snapshot.val()
            const journeyList = []
            for(let id in journeys) {
                journeyList.push({id, ...journeys[id]})
            }
            setJourneyList(journeyList)
        })
    }, [])
    return (
        <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
            {journeyList ? journeyList.map((journey, index)=> (
                <Journey journey={journey} key={index}/>
            )): ''}
        </div> 
    )
}
