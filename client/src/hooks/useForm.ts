import React, { useState } from 'react'

type updateFunc = (event: React.ChangeEvent<HTMLInputElement>) => void

const useForm = <T extends {}>(initilState: T): [T, updateFunc] => {
    const [state, setState] = useState(initilState)

    return [state, event => setState({ ...state, [event.target.name]: event.target.value })]
}

export default useForm
