import React, { useContext, useMemo } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { userContext } from '../App'

interface Props {
    children: JSX.Element
    path: string
}
type onRenderFunc = ({ location }: { location: any }) => JSX.Element & React.ReactNode

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
    const { token } = useContext(userContext)

    const onRender = useMemo<onRenderFunc>(
        () =>
            ({ location }) => {
                console.log('rout: ', token)
                return token === 'ok' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            },
        [token, children]
    )

    return <Route {...rest} render={onRender} />
}

export default PrivateRoute
