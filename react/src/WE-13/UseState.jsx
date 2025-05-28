import React, { useState } from 'react'

const UseState = () => {
    // variable_declaration_keyword[variable,function] = useState(initialValue)
    let[x,setX] = useState(10)
    const[name,setName] = useState('Aman')
    // let x = 10
    // x = 11
    const clickHandler = () => {
        func(curr=>curr+1)
    }
    console.log(x);
    return (
        <div>
            <button onClick={clickHandler}>click me</button>
            <h2>{x}</h2>
        </div>
    )
}

export default UseState