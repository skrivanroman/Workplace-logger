import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'

const userContext = createContext('user')

const App: React.FC = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/echo')
            const data = await response.json()
            setData(data)
        }
        //fetchData()
    }, [])

    return (
        <userContext.Provider value={''}>
            <Login />
            <pre>{(data && JSON.stringify(data, null, 4)) ?? 'loading'}</pre>
        </userContext.Provider>
    )
}

export default App
