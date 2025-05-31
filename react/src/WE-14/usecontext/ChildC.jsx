import React, { useContext } from 'react'
import { postman } from './Index'

const ChildC = () => {
    const name = useContext(postman)
    return (
        <div>My name is {name}</div>
    )
}

export default ChildC