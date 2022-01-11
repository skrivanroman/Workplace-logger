import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'

interface PlaceData {
    name: string
    active: boolean
    x: number
    y: number
}

const WorkMonitor: React.FC = () => {
    const { token } = useContext(userContext)
    const [places, setPlaces] = useState<Array<PlaceData>>([])

    useEffect(() => {
        const fetchPlaces = async () => {
            const response = await fetch('http://localhost:5000/history/now', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    token,
                },
            })

            const message = await response.json()
            setPlaces(message?.places || [])
        }
        fetchPlaces()
    }, [token])

    return (
        <div>
            <main className='place-grid'>
                {places.map(place => {
                    const activeClass = place.active ? 'active' : 'non-active'
                    return (
                        <div className={`place-cell ${activeClass}`} key={place.name}>
                            {place.name}
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default WorkMonitor
