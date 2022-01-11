import React, { createContext, useState } from 'react'
import './styles/index.css'
import Login from './components/Login'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import WorkMonitor from './components/WorkMonitor'

interface UserContextType {
    username: string
    token: string
    setUser: React.Dispatch<
        React.SetStateAction<{
            username: string
            token: string
        }>
    >
}

const userContext = createContext<UserContextType>({
    username: '',
    token: '',
    setUser: () => {},
})

const App: React.FC = () => {
    const [user, setUser] = useState({ username: '', token: '' })

    return (
        <userContext.Provider value={{ ...user, setUser }}>
            <BrowserRouter>
                <Route path='/login'>
                    <Login />
                </Route>
                <PrivateRoute path='/history'>
                    <WorkMonitor />
                </PrivateRoute>
                <Redirect from='*' to='/login' />
            </BrowserRouter>
        </userContext.Provider>
    )
}

export { App, userContext }
