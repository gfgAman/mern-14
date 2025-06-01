import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)

    const totalPrice = () => {
        console.log('function called...');
        let total = 0

        for (let i = 1; i <= 1000000000; i++) {
            total += i
        }
        return total
    }

    // const sum = totalPrice()
    const memoized = useMemo(totalPrice, [])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>add</button>
            <h3>total price:{memoized}</h3>
        </div>
    )
}

export default Usememo