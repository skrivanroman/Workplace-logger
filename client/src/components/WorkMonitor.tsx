import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'

interface PlaceData {
    id: number
    name: string
    active: boolean
    roomName: string
    group: string
    phoneNumber: string
    sensorNumber: number
    x: number
    y: number
}

const WorkMonitor: React.FC = () => {
    const { token } = useContext(userContext)
    const [places, setPlaces] = useState<Array<PlaceData>>([])

    const rowLimit = 6

    useEffect(() => {
        const fetchPlaces = async () => {
            const response = await fetch('http://localhost:5000/workplace/all', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                },
            })

            const message = await response.json()
            const workPlaces: Array<PlaceData> = message?.workPlaces || []

            let x = 0,
                y = 0
            workPlaces.forEach(workPlace => {
                workPlace.active = true
                workPlace.x = x
                workPlace.y = y
                x++
                if (x >= rowLimit) {
                    x = 0
                    y++
                }
            })

            setPlaces(workPlaces)
        }
        fetchPlaces()
    }, [token])

    return (
        <div>
            <main className='place-grid'>
                {places.map(place => {
                    const activeClass = place.active ? 'active' : 'non-active'
                    const left = place.x * 80 + 20
                    const top = place.y * 50 + 20
                    return (
                        <div
                            className={`place-cell ${activeClass}`}
                            style={{ left, top }}
                            key={place.id}
                        >
                            {place.name}
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default WorkMonitor
