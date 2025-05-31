import React, { createContext } from 'react'
import ChildA from './ChildA'

export const postman = createContext()
const Index = () => {
    const name = 'xyz'
    return (
        <postman.Provider value={name}><ChildA/></postman.Provider>
    )
}

export default Index