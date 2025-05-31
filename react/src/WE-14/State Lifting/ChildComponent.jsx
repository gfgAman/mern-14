import React from 'react'

const ChildComponent = ({ setName, setCount, count }) => {
    // console.log(setName,'ncksn');

    return (
        <div><button onClick={() => setName('hello world!!')}>change my name</button>
            <button onClick={() => setCount(prev => prev + 1)}>change value</button>
            <h2>child component {count}</h2>
        </div>
    )
}

export default ChildComponent