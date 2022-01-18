import React, { useContext, useState } from 'react'
import { userContext } from '../App'
import { Redirect, useLocation } from 'react-router-dom'
import useForm from '../hooks/useForm'

const Login: React.FC = () => {
    const [formState, updateForm] = useForm({ username: '', password: '' })
    const [redirectBack, setRedirectBack] = useState(false)
    const { setUser } = useContext(userContext)
    const { state } = useLocation()
    const [errMessage, setErrMessage] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })

        const { username, 'auth-token': token } = await response.json()
        console.log(token)
        if (token) {
            setUser({ username, token })
            setRedirectBack(true)
        } else {
            setErrMessage('neplatné údaje')
        }
    }
    if (redirectBack) {
        return <Redirect to={(state as any)?.from?.pathname || '/history'} />
    }

    return (
        <div className='login-body'>
            <main className='card'>
                <h2 className='card-heading'>Sledování pracovišť</h2>
                <form onSubmit={handleSubmit} className='card-form'>
                    <div className='input'>
                        <input
                            type='text'
                            name='username'
                            value={formState.username}
                            onChange={updateForm}
                            className='input-field'
                            required={true}
                        />
                        <label className='input-label'>jméno</label>
                    </div>

                    <div className='input'>
                        <input
                            type='password'
                            name='password'
                            value={formState.password}
                            onChange={updateForm}
                            className='input-field'
                            required={true}
                        />
                        <label className='input-label'>heslo</label>
                    </div>
                    <div className='action'>
                        <input
                            type='submit'
                            name='submit'
                            value='přihlásit se'
                            className='action-button'
                        />
                    </div>
                </form>
                <div className='card-info'>
                    <p className='error-message'>{errMessage}</p>
                </div>
            </main>
        </div>
    )
}

export default Login
