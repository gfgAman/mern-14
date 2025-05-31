import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const Parent = () => {
    const [count, setCount] = useState(0)


    const callback = useCallback(() => setCount(prev => prev + 1), [])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={callback}>click me</button>
            <ChildComponent count={count} />
        </div>
    )
}

export default Parent