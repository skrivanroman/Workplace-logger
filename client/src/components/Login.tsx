import React from 'react'
import useForm from '../hooks/useForm'

const Login: React.FC = () => {
    const [formState, updateForm] = useForm({ username: '', password: '' })

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

        const message = await response.json()
        console.log(message)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    jméno
                    <input
                        type='text'
                        name='username'
                        value={formState.username}
                        onChange={updateForm}
                    />
                </label>
                <label>
                    heslo
                    <input
                        type='password'
                        name='password'
                        value={formState.password}
                        onChange={updateForm}
                    />
                </label>
                <input type='submit' name='submit' value='přihlásit' />
            </form>
        </div>
    )
}

export default Login
