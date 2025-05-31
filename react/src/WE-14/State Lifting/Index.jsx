import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const Index = () => {
    const [name, setName] = useState('abc')
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{name}</h2>
            <h3>{count}</h3>
            <ChildComponent setName={setName} setCount={setCount} count = {count}/>
        </div>
    )
}

export default Index