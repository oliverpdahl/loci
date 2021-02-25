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
            <tbody>
            {journeyList ? journeyList.map((journey, index)=> (
                <Journey journey={journey} key={index}/>
            )): ''}
            </tbody>
    )
}
